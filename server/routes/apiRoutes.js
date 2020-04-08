const models = require('../models');
const moment = require('moment')
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/api/fetchOrders', (req, res) => {
  models.orders
    .findAll({
      attributes: ['quote', 'date', 'data'],
      where: {
        pulled: 'no',
        date: {
          [Op.gte]: moment().subtract(30, 'days').toDate()
        }
      },
      include: [{
        model: models.users,
        as: 'customerInfo',
        attributes: ['first_name', 'last_name']
      }]
    })
    .then(orders => {
      res.json(dataParse(orders))
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
});


// Order Data parser. Turns Json Data String into Data Obj
const dataParse = (data) => {
  data.forEach(el => {
    let dataStr = el.data;
    let dataArr = dataStr.split(/[,@]/);
    let newArr = [];
    for (let i = 0; i < dataArr.length; i += 5) {
      let obj = {
        type: dataArr[i + 0],
        sku: dataArr[i + 1],
        cost: dataArr[i + 2],
        qty: dataArr[i + 3],
        desc: dataArr[i + 4]
      }
      newArr.push(obj);
    }
    el.data = newArr;
  });
  return data
}

module.exports = router;