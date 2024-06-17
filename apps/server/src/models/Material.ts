import { Sequelize, DataTypes, Model } from "sequelize";

class Material extends Model {
  public material_id!: number;
  public material_name!: string;
  public additional_cost!: number;
  public created_at!: Date;
}

const initMaterial = (sequelize: Sequelize) => {
  Material.init(
    {
      material_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      material_name: {
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

  return Material;
};

export default initMaterial;
