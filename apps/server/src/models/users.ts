import { Sequelize, DataTypes, Model } from "sequelize";

const initUser = (sequelize: Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};

export default initUser;
