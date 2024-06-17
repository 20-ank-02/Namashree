import { Sequelize, DataTypes, Model } from "sequelize";

class User extends Model {
  public user_id!: number;
  public email!: string;
  public password_hash!: string;
  public name!: string;
  public phone_number!: number;
  public created_at!: Date;
}

const initUser = (sequelize: Sequelize) => {
  User.init(
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
      timestamps: false,
      sequelize,
    }
  );

  return User;
};

export default initUser;
