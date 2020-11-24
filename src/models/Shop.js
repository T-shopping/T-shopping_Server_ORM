module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('shop', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      field: 'item_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_content: {
      field: 'item_content',
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      field: 'user_email',
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      field: 'stock',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      field: 'category',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      field: 'img',
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now,
    },
  }, {
    tableName: 'shop',
    timestamps: false,
  });

  return Shop;
}