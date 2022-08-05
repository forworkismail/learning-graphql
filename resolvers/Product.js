const { categoriesData } = require('../data');

exports.Product = {
  category: (parent, args, context) => {
    return categoriesData.find((category) => category.id === parent.categoryId);
  },
};
