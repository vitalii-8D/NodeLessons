const fs = require('fs');
const path = require('path');
// const util = require('util');
const carsPath = path.join(process.cwd(), 'db', 'cars.json');
const usersPath = path.join(process.cwd(), 'db', 'users.json');

// const readFilePromised = util.promisify(fs.readFile);

/*async function readFile() {
    const carsPromise = await readFilePromised(filePath);
    const cars = await JSON.parse(carsPromise.toString());
    console.log('readFileFunction ************');
    console.log(cars);
    return cars;
}*/

module.exports = {
    fetchAllCars: () => {
        const cars = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
        return cars;

        /*const cars = await readFile();
        console.log('fetchAllCars ******************');
        console.log(cars);
        return cars;*/
    },
    pushCar(newCar) {
        let carsJSON = fs.readFileSync(carsPath, 'utf-8') || '[]';

        let cars = JSON.parse(carsJSON);
        id = cars.length ? cars[cars.length - 1].id + 1 : 1;

        cars.push({id,...newCar});
        fs.writeFileSync(carsPath, JSON.stringify(cars), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return cars;
    },
    deleteCar(id) {
        let cars = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                cars.splice(i,1);
                break;
            }
        }
        fs.writeFileSync(carsPath, JSON.stringify(cars), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return cars;
    },
    fetchOneCar: (id) => {
        const cars = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
        let index;
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                index = i;
                break;
            }
        }
        return cars[index];
    },
    updateOneCar: (id, body) => {
        const cars = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
        let index;
        const carToUpdate = cars.find((car, ind) => {
            index = ind;
            return car.id === +id;
        });
        for (let key in body) {
            cars[index][key] = body[key];
        }
        fs.writeFileSync(carsPath, JSON.stringify(cars), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return cars;
    }
}
