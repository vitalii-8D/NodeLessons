// New code
// Витягуємо об'єкт для роботи з базою (для Mysql2 зробити просто require('../dataBase');)
const connection = require('../dataBase').getInstance();
const {Op} = require('sequelize');

module.exports = {
    fetchAllCars: () => {
        // Витягуємо певну модель(треба робити у кожному методі сервіса)
        const Car = connection.getModel('Car');
        return Car.findAll({});
    },

    // Цей запит зроблено бібліотекою Mysql2
    /*fetchAllCars: async () => {
        const [cars] = await connection.promise().query('SELECT * FROM cars');
        return cars;
    },*/

    pushCar: (newCarObj) => {
        const Car = connection.getModel('Car');
        return Car.create(newCarObj, {new: true});
    },
    deleteCar(id) {
        const Car = connection.getModel('Car');
        return Car.destroy({
            where: {
                id: id
            }
        })
    },
    fetchOneCar: (id) => {
        const Car = connection.getModel('Car');
        return Car.findByPk(id);
    },
    updateOneCar: (id, body) => {
        const Car = connection.getModel('Car');
        const isUpdateSuccess = Car.update(body, {
            where: {
                id: id
            }
        })
    }
}
