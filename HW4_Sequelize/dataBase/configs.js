const {Sequelize} = require('sequelize');

module.exports = new Sequelize('auto_shop', 'root', 'root', {
    host: 'localhost', dialect: 'mysql'
})
