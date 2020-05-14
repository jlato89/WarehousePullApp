module.exports = (sequelize, DataTypes) => {
  const inventory_index = sequelize.define(
    'inventory_index',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sku_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      location: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      global_sku_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
      },
    },
    {
      tableName: 'inventory_index',
    },
  );
  inventory_index.associate = models => {
    inventory_index.belongsTo(models.inventory_index_location, {
      foreignKey: 'location',
      as: 'itemLocation',
    });
  };
  return inventory_index;
};
