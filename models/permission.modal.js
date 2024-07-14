const { sequelize, DataTypes, Model } = require("../database/dbservice");
const RoleModel = require("./role.modal");

class PermissionModal extends Model {}

PermissionModal.init(
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
    model: {
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
    modelName: "permissions",
    paranoid: true,
    timestamps: true,
  }
);

PermissionModal.belongsTo(RoleModel);
RoleModel.hasMany(PermissionModal);

PermissionModal.sync();
module.exports = PermissionModal;
