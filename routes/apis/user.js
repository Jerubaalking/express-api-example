const { sequelize } = require("../../database/dbservice");
const RoleModel = require("../../models/role.modal");
const UserModel = require("../../models/user.modal");
const { standardRespose } = require("../api-helper");

module.exports = {
  all: async (req, res) => {
    const users = await UserModel.findAll({include:[{model:RoleModel}]});
    const result = standardRespose(await users, null);
    await res.status(result.status).json(result);
  },
  create: async (req, res) => {
    /**Check you data */
    console.log(req.body);
    const createTransaction = await sequelize.transaction();
    try {
      const newUser = new UserModel();
      newUser.firstname = req.body.firstname;
      newUser.lastname = req.body.lastname;
      newUser.phone = req.body.phone;
      newUser.password = req.body.password;
      newUser.roleId = req.body.roleId;
      await newUser.save({ transaction: createTransaction });
      await createTransaction.commit();
      const result = standardRespose(await newUser, null);
      await res.status(result.status).json(result);
    } catch (error) {
      await createTransaction.rollback();
      const err = standardRespose(null, error);
      res.status(err.status).json(err);
    }
  },
};
