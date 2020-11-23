module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define('user_info', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      field: 'title'
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
      allowNull: false,
    },
    view: {
      field: 'view',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    tableName: 'user_info',
    timestamps: false,
  });

  return UserInfo;
}