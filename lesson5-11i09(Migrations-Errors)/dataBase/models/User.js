module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {min: 18, max: 110}
        }
    }, {
        tableName: 'users',
        timestamps: false,
        classMethods: {
            associate: function(models) {
                this.hasMany(models.Car, { foreignKey: 'userId' })
            }
        }
    });
};
