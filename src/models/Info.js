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
    address: {
      field: 'address',
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch_number: {
      field: 'branch_number',
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      field: 'phone',
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      field: 'gender',
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    tableName: 'user_info',
    timestamps: false,
  });

  return UserInfo;
}