const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('instagram', 
                                'postgres', 
                                'selva123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelize.query('show tables').then(function(rows) {
  console.log(JSON.stringify(rows));
});
console.log(sequelize.tables);
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

