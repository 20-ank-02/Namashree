import { Sequelize, DataTypes, Model } from "sequelize";

class Color extends Model {
  public color_id!: number;
  public color_name!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

const initColor = (sequelize: Sequelize) => {
  Color.init(
    {
      color_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      color_name: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
    }
  );

  return Color;
};

export default initColor;
