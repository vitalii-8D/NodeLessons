
module.exports = {
    userValidator: (req, res, next) => {
        try {
            const car = req.body;
            if (!car.model || !car.year || !car.price || !car.userId) {
                throw new Error('Something wrond, dude')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
