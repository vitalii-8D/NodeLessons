const {carService} = require('../services');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const cars = await carService.fetchAllCars();
            res.json(cars);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    addCar: async (req, res) => {
        try {
            const newCarsArr = await carService.pushCar(req.body);
            res.json(newCarsArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    deleteCar: async (req, res) => {
        try {
            const {id} = req.params;
            const newCarsArr = await carService.deleteCar(+id);
            res.json(newCarsArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    getOneCar: async (req, res) => {
        try {
            const {id} = req.params;
            const newCarsArr = await carService.fetchOneCar(+id);
            res.json(newCarsArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    updateCar: async (req, res) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const newCarsArr = await carService.updateOneCar(+id, body);
            console.log(newCarsArr);
            res.json(newCarsArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
