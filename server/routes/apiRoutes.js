const models = require('../models');
const moment = require('moment');
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/api/fetchOrders', (req, res) => {
  models.orders
    .findAll({
      attributes: ['id', 'quote', 'date', 'data'],
      where: {
        pulled: 'no',
        date: {
          [Op.gte]: moment()
            .subtract(30, 'days')
            .toDate(),
        },
      },
      include: [
        {
          model: models.users,
          as: 'customerInfo',
          attributes: ['first_name', 'last_name'],
        },
      ],
    })
    .then(orders => {
      res.json(dataParse(orders));
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/api/testData', (req, res) => {
  const TESTDATA = require('../../TestData/testData.json');
  let sku = [];
  let dsCode = [];

  models.cabinet_skus
    .findAll({
      attributes: [
        'id',
        'global_sku_id',
        'sku_type',
        'sku',
        'ds_code',
        'type',
        'box_type',
        'box_sku',
      ],
      where: {
        is_deleted: 0,
        has_sub: 0,
        sku: 'B18',
        ds_code: 'DSW',
      },
      include: {
        model: models.inventory_index,
        as: 'itemInfo',
        attributes: ['id'],
        // limit: 1,
        where: {
          quantity: { [Op.gt]: 0 },
        },
        include: {
          model: models.inventory_index_location,
          as: 'itemLocation',
          attributes: {
            exclude: ['id'],
          },
        },
      },
    })
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Order Data parser. Turns Json Data String into Data Obj
const dataParse = data => {
  data.forEach(el => {
    let dataStr = el.data;
    let dataArr = dataStr.split(/[,@]/);
    let newArr = [];
    for (let i = 0; i < dataArr.length; i += 5) {
      let obj = {
        style: dataArr[i + 0],
        sku: dataArr[i + 1],
        qty: dataArr[i + 3],
        picked: false,
      };
      newArr.push(obj);
    }
    el.data = newArr;
  });
  return data;
};

module.exports = router;
