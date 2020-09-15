
module.exports = {
    carValidator: (req, res, next) => {
        try {
            const user = req.body;
            if (!user.name || !user.age || !user.surname) {
                throw new Error('Something wrond, dude')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
