module.exports = (sequelize, DataTypes) => {
  const cabinet_skus = sequelize.define('cabinet_skus', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sku: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ds_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    box_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    box_sku: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    warn_at: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    mod: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    isle: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    bay: {
      type: DataTypes.INTEGER(2),
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ds_code_alias: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    has_sub: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    is_global: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    qty_sell: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sku_multiplier: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sku_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    global_sku_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cabinet_skus'
  });
  cabinet_skus.associate = (models) => {
    cabinet_skus.hasMany(models.inventory_index,
      { foreignKey: 'sku_id', as: 'locationIndex' }
    );
  }
  return cabinet_skus
};
