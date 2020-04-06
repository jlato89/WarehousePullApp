module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bill_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bill_city: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    bill_state: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    bill_zip: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    bill_country: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    email: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    credit_terms: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    leads: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    commission: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assembly_per: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    installation: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rep_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '0'
    },
    date_time: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    terms: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    price_tier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    resale_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    exempt_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    browser: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    os: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    quickbooks_listid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    quickbooks_editsequence: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'users'
  });
  User.associate = (models) => {
    User.hasMany(models.orders, { foreignKey: 'user', as: 'orders' });
  }
  return User
};
