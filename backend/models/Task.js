const { DataTypes } = require('sequelize');
const sequelize = require('../data'); 

const Task = sequelize.define('Task', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  tableName: 'tasks',
  timestamps: true,
});

module.exports = Task;

