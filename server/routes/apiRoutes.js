const models = require('../models');
const moment = require('moment')
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/api/fetchOrders', function (req, res) {
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
      res.json(orders)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
});

module.exports = router;