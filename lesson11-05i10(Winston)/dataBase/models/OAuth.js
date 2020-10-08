'use strict';
const {TOKENS} = require('../../configs/db-tables.enum')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OAuth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OAuth.belongsTo(models.User, {foreignKey: 'user_id'});
    }
  };
  OAuth.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    access_token: {
      type: DataTypes.STRING
    },
    refresh_token: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      default: new Date().toISOString()
    }
  }, {
    sequelize,
    modelName: 'OAuth',
    tableName: TOKENS,
    timestamps: false
  });
  return OAuth;
};
