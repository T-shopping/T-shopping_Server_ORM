module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('friend', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_1_email: {
      field: 'user_1_email',
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_2_email: {
      field: 'user_2_email',
      type: DataTypes.STRING,
      allowNull: false,
    },
    group_idx: {
      field: 'group_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'friend',
    timestamps: false,
  });

  return Friend;
}