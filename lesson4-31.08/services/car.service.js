const fs = require('fs');
const path = require('path');
const util = require('util');
const filePath = path.join(process.cwd(), 'db','cars.json');

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
        const carsJSON = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(carsJSON);

        /*const cars = await readFile();
        console.log('fetchAllCars ******************');
        console.log(cars);
        return cars;*/
    },
    pushCar(newCar) {
        let carsJSON = fs.readFileSync(filePath, 'utf-8') || '[]';

        let cars = JSON.parse(carsJSON);
        id = cars.length ? cars[cars.length - 1].id + 1 : 1;

        cars.push({id,...newCar});
        fs.writeFileSync(filePath, JSON.stringify(cars), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return cars;
    },
    deleteCar(id) {
        let cars = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        cars.forEach((car, index) => {
            if (car.id === id) {
                cars.splice(index,1);
            }
        })
        fs.writeFileSync(filePath, JSON.stringify(cars), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return cars;
    },
    fetchOneCar: (id) => {

    }
}
