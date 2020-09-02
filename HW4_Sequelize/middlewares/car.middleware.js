const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'db','cars.json');

module.exports = {
    carValidator: (req, res, next) => {
        try {
            const car = req.body;
            if (car.model || car.year || car.price) {
                throw new Error('Something wrond, dude')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
