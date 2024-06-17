import { Sequelize, DataTypes, Model } from "sequelize";

class Customization extends Model {
  public customization_id!: number;
  public product_id!: number;
  public material_id!: number;
  public color_id!: number;
  public design_id!: number;
  public size!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

const initCustomization = (sequelize: Sequelize) => {
  Customization.init(
    {
      customization_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      material_id: {
        type: DataTypes.INTEGER,
      },
      color_id: {
        type: DataTypes.INTEGER,
      },
      design_id: {
        type: DataTypes.INTEGER,
      },
      size: {
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

  return Customization;
};

export default initCustomization;
