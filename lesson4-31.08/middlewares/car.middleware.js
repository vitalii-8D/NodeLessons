const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'db','cars.json');

module.exports = {
    isIdPresent: (req, res, next) => {
        try {
            console.log('isIdPresent middleware ************');
            let cars = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            const {id} = req.params;
            const isId = cars.find(car => car.id === +id);
            console.log(isId);
            if (!isId) {
                throw new Error('There is no such id! Please, put another')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    isArrayEmpty: (req, res, next) => {
        console.log('isArrayEmpty middleware ************');
        try {
            let carsJSON = fs.readFileSync(filePath, 'utf-8') || '[]';
            let cars = JSON.parse(carsJSON);
            if (!cars.length) {
                throw new Error('There is no cars yet! Please, add the first')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }

}
