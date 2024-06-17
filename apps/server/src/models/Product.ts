import { Sequelize, DataTypes, Model } from "sequelize";

class Product extends Model {
  public product_id!: number;
  public product_type!: Array<string>;
  public description!: string;
  public product_name!: string;
  public base_price!: number;
  public image_url!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

const initProduct = (sequelize: Sequelize) => {
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_type: {
        type: DataTypes.ENUM,
        values: ["Saree", "Suit", "Kurta"],
      },
      description: {
        type: DataTypes.STRING,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      base_price: {
        type: DataTypes.DECIMAL(10, 0),
      },
      image_url: {
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

  return Product;
};

export default initProduct;
