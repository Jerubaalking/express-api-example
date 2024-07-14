const { Sequelize, DataTypes, Transaction, Model, Op } = require("sequelize");

class DBService {
  constructor(configPath) {
    this.DataTypes = DataTypes;
    this.config = require(configPath);
    try {
      this.sequelize = new Sequelize({
        username: this.config.USER,
        database: this.config.NAME,
        password: this.config.PASSWORD,
        host: this.config.HOST,
        dialect: "mysql",
        port: this.config.PORT,
        logging: false,
        pool: {
          max: 10, // maximum number of connection in pool
          min: 0, // minimum number of connection in pool
          acquire: 30000, // maximum time, in ms, that pool will try to get connection before throwing error
          idle: 10000, // maximum time, in ms, that a connection can be idle before being released
        },
        dialectOptions: {
          connectTimeout: 15000, // 10 seconds
        },
      });
    } catch (error) {
        console.log("DB Config error ==>",error);
    //   throw error;
    }
    return {
        sequelize: this.sequelize,
        DataTypes: this.DataTypes,
        Transaction: Transaction,
        Model: Model,
        Op,
      };
  }
}

module.exports = new DBService("./config");
