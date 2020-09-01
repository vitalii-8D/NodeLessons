const {carService} = require('../services');

module.exports = {
    getAllCars: (req, res) => {
        const cars = carService.fetchAllCars();
        console.log('getAllCars *************');
        console.log(cars);
        res.json(cars);
    },
    addCar: (req, res) => {
        const newCarsArr = carService.pushCar(req.body);
        res.json(newCarsArr);
    },
    deleteCar: (req, res) => {
        const {id} = req.params;
        const newCarsArr = carService.deleteCar(+id);
        res.json(newCarsArr);
    },
    getOneCar: (req, res) => {
        const {id} = req.params;
        const newCarsArr = carService.fetchOneCar(+id);
        res.json(newCarsArr);
    },
    updateCar: (req, res) => {
        const {id} = req.params;
        const body = req.body;
        const newCarsArr = carService.updateOneCar(+id, body);
        res.json(newCarsArr);
    }
}
