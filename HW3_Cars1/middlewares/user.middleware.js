const fs = require('fs');
const path = require('path');
const usersPath = path.join(process.cwd(), 'db','users.json');
const carsPath = path.join(process.cwd(), 'db','cars.json');

module.exports = {
    isIdPresent: (req, res, next) => {
        try {
            console.log('isIdPresent middleware ************');
            let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
            const {id} = req.params;
            const isId = users.find(user => user.id === +id);
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
            let usersJSON = fs.readFileSync(usersPath, 'utf-8') || '[]';
            let users = JSON.parse(usersJSON);
            if (!users.length) {
                throw new Error('There is no users yet! Please, add the first')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    isPropertiesPresent: (req, res, next) => {
        console.log('isPropertiesPresent middleware ************');
        try {
            const {id} = req.params;
            const body = req.body;
            const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
            const userToUpdate = users.find(user => user.id === +id);
            for (const key in body) {
                if (!userToUpdate[key]) {
                    throw new Error(`The property ${key} is missing in the target object`)
                }
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    isUserHasCars: (req, res, next) => {
        try {
            const {id} = req.params;
            const cars = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
            const isUserIdPresent = cars.find(car => car.userId === +id);

            if (!isUserIdPresent) {
                throw new Error('This user doesn`t have a car');
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
