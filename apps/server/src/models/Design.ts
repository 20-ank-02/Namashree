import { Sequelize, DataTypes, Model } from "sequelize";

class Design extends Model {
  public design_id!: number;
  public design_name!: string;
  public additional_cost!: number;
  public created_at!: Date;
}

const initDesign = (sequelize: Sequelize) => {
  Design.init(
    {
      design_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      design_name: {
        type: DataTypes.STRING,
      },
      additional_cost: {
        type: DataTypes.DECIMAL(10, 0),
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

  return Design;
};

export default initDesign;
