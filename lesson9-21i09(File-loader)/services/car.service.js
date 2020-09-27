const {Car} = require('../dataBase/models');
const {Op} = require('sequelize');

module.exports = {
    fetchAllCars: () => {
        return Car.findAll({});
    },
    pushCar: (newCarObj) => {
        return Car.create(newCarObj, {new: true});
    },
    deleteCar: (id) => {
        return Car.destroy({
            where: {
                id: id
            }
        })
    },
    fetchOneCar: (id) => {
        return Car.findByPk(id);
    },
    updateOneCar: (id, body) => {
        const car = Car.findByPk(id);
        return Car.update(body, {
            where: {
                id: id
            }
        }).then(() => car)
    }
}
