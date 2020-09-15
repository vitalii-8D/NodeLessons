const CarModel = require('./Car');
const UserModel = require('./User');

CarModel.belongsTo(UserModel);
UserModel.hasMany(CarModel, {
    onDelete: 'SET NULL',
    onUpdate: 'RESTRICT',
});

module.exports = {
    CarModel,
    UserModel
}
