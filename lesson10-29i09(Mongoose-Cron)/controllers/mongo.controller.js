const { mongoService } = require('../services');

class MongoController {
    async getUsers(req, res, next) {
        try {
            const users = await mongoService.getAllUsers();
            res.json(users)
        } catch (e) {
            next(e)
        }
    }

    async createUser(req, res, next) {
        try {
            console.log('----****----   req.body    ----****----');
            console.log(req.body);
            console.log('----****----   req.body    ----****----');
            const newUser = await mongoService.createUser(req.body);
            res.json(newUser)
        } catch (e) {
            next(e)
        }
    }

    async getCars(req, res, next) {
        try {
            const cars = await mongoService.getAllCars();
            res.json(cars)
        } catch (e) {
            next(e)
        }
    }

    async createCar(req, res, next) {
        console.log('----****----   req.body    ----****----');
        console.log(req.body);
        console.log('----****----   req.body    ----****----');
        try {
            const newCar = await mongoService.createCar(req.body);
            res.json(newCar)
        } catch (e) {
            next(e)
        }
    }

    async getUsersCars(req, res, next) {
        try {
            const cars = await mongoService.getCarsOfUser();
            res.json(cars)
        } catch (e) {
            next(e)
        }
    }
}


module.exports = new MongoController();
