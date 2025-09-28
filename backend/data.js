const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todoapp', 'root', 'Your_password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Unable to connect to DB:', err));

module.exports = sequelize;
