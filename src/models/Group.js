module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    group_idx: {
      field: 'group_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_email: {
      field: 'user_email',
      type: DataTypes.STRING,
      allowNull: false,
    },
    info_idx: {
      field: 'info_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shop_idx: {
      field: 'shop_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'group',
    timestamps: false,
  });

  return Group;
}