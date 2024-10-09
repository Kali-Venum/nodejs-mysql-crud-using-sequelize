module.exports = (sequelize, DataTypes) => {
  const ReviewModel = sequelize.define("review", {
    rating: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  return ReviewModel;
};
