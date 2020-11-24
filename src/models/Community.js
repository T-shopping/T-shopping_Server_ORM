module.exports = (sequelize, DataTypes) => {
  const Community = sequelize.define('community', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now,
    },
  }, {
    tableName: 'community',
    timestamps: false,
  });

  return Community;
}