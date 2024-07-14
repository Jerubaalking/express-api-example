const { sequelize, DataTypes, Model } = require("../database/dbservice");

class RoleModel extends Model {}

RoleModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "roles",
    paranoid: true,
    timestamps: true,
  }
);

RoleModel.sync();
module.exports = RoleModel;
