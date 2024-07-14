const { sequelize, DataTypes, Model } = require("../database/dbservice");
const RoleModel = require("./role.modal");

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fullname: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this?.firstname} ${this?.lastname}`;
      },
      set(value) {
        throw new Error("Cannot set fullname directly");
      },
    },
  },
  {
    sequelize,
    modelName: "users",
    paranoid: true,
    timestamps: true,
  }
);

UserModel.belongsTo(RoleModel);
RoleModel.hasMany(UserModel);

UserModel.sync();
module.exports = UserModel;
