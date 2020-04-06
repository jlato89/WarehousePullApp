/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    friendly_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    quote: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    shipping: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    charged_shipping: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    auth: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    tracking: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    install: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rep: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    modded: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    group: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    quote_date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pulled: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ship_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ship_city: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ship_state: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ship_zip: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ship_country: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    quickbooks_listid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quickbooks_editsequence: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quickbooks_txnid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sub_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_sample: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    order_discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount_rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    org_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_custom_shipping: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_custom_tax: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'orders'
  });
};
