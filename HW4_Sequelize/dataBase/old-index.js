// Це все трохи застарілий метод, ліпше робити в app через sync

const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path');

// реалізуємо паттерн  SINGLE TONE
module.exports = (() => {
    let instance;

    function initConnection () {
        const client = new Sequelize('auto_shop','root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), 'dataBase', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = require(path.join(process.cwd(), 'dataBase', 'models', modelName))(client, DataTypes);
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})()

// Database with Mysql2
// Це зроблено бібліотекою Mysql2
/*const  mysql2 = require('mysql2');

let connection = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'auto_shop'
});

module.exports = connection;*/
