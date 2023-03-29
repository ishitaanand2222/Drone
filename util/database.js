const Sequelize = require('sequelize');

//this will automatically connect to database, or it will create a connection pool + has all features of sequelize package
const sequelize = new Sequelize('Bookings','root','ishitaanand1*',{
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;