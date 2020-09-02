// New code
// Витягуємо об'єкт для роботи з базою (для Mysql2 зробити просто require('../dataBase');)
// Це код від Віті з лекції
// const connection = require('../dataBase').getInstance();

// Код паші і з менюала
const {CarModel} = require('../dataBase/models');
const {Op} = require('sequelize');

module.exports = {
    fetchAllCars: () => {
        // Витягуємо певну модель(треба робити у кожному методі сервіса)
        // Якщо робити за новими правилами - оголошення зверху
        // const Car = connection.getModel('Car');
        return CarModel.findAll({});
    },

    // Цей запит зроблено бібліотекою Mysql2
    /*fetchAllCars: async () => {
        const [cars] = await connection.promise().query('SELECT * FROM cars');
        return cars;
    },*/

    pushCar: (newCarObj) => {
        return CarModel.create(newCarObj, {new: true});
    },
    deleteCar(id) {
        return CarModel.destroy({
            where: {
                id: id
            }
        })
    },
    fetchOneCar: (id) => {
        return CarModel.findByPk(id);
    },
    updateOneCar: (id, body) => {
        const car = CarModel.findByPk(id);
        return CarModel.update(body, {
            where: {
                id: id
            }
        }).then(() => car)
    }
}
