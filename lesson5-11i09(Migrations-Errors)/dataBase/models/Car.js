module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'cars',
        timestamps: false,
        /*classMethods: {
            associate: function(models) {
                this.belongsTo(models.User)
            }
        }*/
    });
};
