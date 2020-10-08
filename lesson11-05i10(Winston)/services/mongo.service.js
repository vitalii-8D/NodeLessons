const { Users, Cars } = require('../dataBase/mongo-models');

class MongoService {
    getAllUsers() {
        return Users.find({});
    }
    createUser(userObj) {
        return new Users(userObj).save();
    }
    getAllCars() {
        return Cars.find({});
    }
    createCar(carObj) {
        return new Cars(carObj).save();
    }
    getCarsOfUser(userId) {

    }
}

module.exports = new MongoService();
