'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(
        models.User, { foreignKey: 'ownerId' }
      );
      Spot.hasMany(
        models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      );
      Spot.hasMany(
        models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      );
      Spot.hasMany(
        models.SpotImage, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      );
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        min: -90,
        max: 90,
      }
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        min: -180,
        max: 180,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 10000]
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        check(value) {
          if (isNaN(value) || value <= 0) {
            throw new Error("Price can not less than 0.")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
