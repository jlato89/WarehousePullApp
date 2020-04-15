module.exports = (sequelize, DataTypes) => {
  const inventory_index_location = sequelize.define('inventory_index_location', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    isle: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    bay: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    tableName: 'inventory_index_location'
  });
  return inventory_index_location
};
