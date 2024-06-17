import { Sequelize, DataTypes, Model } from "sequelize";

class Order extends Model {
  public order_id!: number;
  public user_id!: number;
  public total_amount!: number;
  public status!: Array<string>;
  public created_at!: Date;
  public updated_at!: Date;
}

const initOrder = (sequelize: Sequelize) => {
  Order.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      total_amount: {
        type: DataTypes.DECIMAL(10, 0),
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Pending", "Processing", "Completed", "Cancelled"],
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

  return Order;
};

export default initOrder;
