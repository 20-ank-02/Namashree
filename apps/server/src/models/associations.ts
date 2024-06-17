export default function setupAssociations(models: any) {
  const {
    Product,
    Material,
    Color,
    Design,
    Customization,
    OrderItem,
    Order,
    User,
  } = models;

  // Product associations
  Product.hasMany(Customization, { foreignKey: "product_id" });

  // Material associations
  Material.hasMany(Customization, { foreignKey: "material_id" });

  // Color associations
  Color.hasMany(Customization, { foreignKey: "color_id" });

  // Design associations
  Design.hasMany(Customization, { foreignKey: "design_id" });

  // Customization associations
  Customization.belongsTo(Product, { foreignKey: "product_id" });
  Customization.belongsTo(Material, { foreignKey: "material_id" });
  Customization.belongsTo(Color, { foreignKey: "color_id" });
  Customization.belongsTo(Design, { foreignKey: "design_id" });
  Customization.belongsTo(User, { foreignKey: "user_id" });
  Customization.hasMany(OrderItem, { foreignKey: "customization_id" });

  // OrderItem associations
  OrderItem.belongsTo(Order, { foreignKey: "order_id" });
  OrderItem.belongsTo(Customization, { foreignKey: "customization_id" });

  // Order associations
  Order.belongsTo(User, { foreignKey: "user_id" });
  Order.hasMany(OrderItem, { foreignKey: "order_id" });

  // User associations
  User.hasMany(Order, { foreignKey: "user_id" });
  User.hasMany(Customization, { foreignKey: "user_id" });
}
