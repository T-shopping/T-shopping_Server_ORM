module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      field: 'email',
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
}