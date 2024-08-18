const router = require('express').Router();
const controller = require('../controller/index');
const route = router;

route.get('/recipes', controller.newRecipes);
route.get('/recipes/:page', controller.newRecipesByPage);
route.get('/recipes-length/', controller.newRecipesLimit);
route.get('/category/recipes', controller.category);
route.get('/articles/new', controller.article);
route.get('/category/recipes/:key', controller.recipesByCategory);
route.get('/category/recipes/:key/:page', controller.recipesCategoryByPage);
route.get('/recipe/:key', controller.recipesDetail);
route.get('/search/', controller.searchRecipes);
route.get('/category/article', controller.articleCategory);
route.get('/category/article/:key', controller.articleByCategory);
route.get('/article/:tag/:key', controller.articleDetails);

module.exports = route;
