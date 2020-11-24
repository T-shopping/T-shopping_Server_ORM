module.exports = (sequelize, DataTypes) => {
  const GInfo = sequelize.define('ginfo', {
    info_idx: {
      field: 'info_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_name: {
      field: 'group_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    group_people: {
      field: 'group_people',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_date: {
      field: 'group_date',
      type: DataTypes.TIME,
      allowNull: false,
    },
  }, {
    tableName: 'ginfo',
    timestamps: false,
  });

  return GInfo;
}