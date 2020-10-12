const CustomError = require('../errors/ErrorHandler');

module.exports = {
    carValidator: (req, res, next) => {
        try {
            const car = req.body;
            if ( !Object.keys(car).length ) {
                throw new CustomError('Missing car object', 400, 'car-middleware', 4001)
            }
            if ( !car.model ) {
                throw new CustomError('Missing car`s model', 400, 'car-middleware', 4002)
            }
            if ( !car.year ) {
                throw new CustomError('Missing car`s year', 400, 'car-middleware', 4003)
            }
            if ( !car.price ) {
                throw new CustomError('Missing car`s price', 400, 'car-middleware', 4004)
            }
            if ( !car.userId ) {
                throw new CustomError('Missing car`s userId', 400, 'car-middleware', 4003)
            }
            next();
        } catch (e) {
            return res.status(e.status).json(e);
        }
    }
}
