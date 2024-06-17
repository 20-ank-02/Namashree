import { Sequelize, DataTypes, Model } from "sequelize";

class OrderItem extends Model {
  public order_Item_id!: number;
  public order_id!: number;
  public price!: number;
  public customization_id!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

const initOrderItem = (sequelize: Sequelize) => {
  OrderItem.init(
    {
      order_Item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.DECIMAL(10, 0),
      },
      customization_id: {
        type: DataTypes.INTEGER,
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

  return OrderItem;
};

export default initOrderItem;
