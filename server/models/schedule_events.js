/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedule_events', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    start: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    end: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    type: {
      type: "VARBINARY(32)",
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    installer: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assigned: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'schedule_events'
  });
};
