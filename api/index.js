import express from 'express';

const Router = express.Router();

import { getCategories, getCategory } from './controllers/category.js';
import { getProducts, getProduct } from './controllers/product.js';

Router.use((req, res, next) => {
    console.log(`/${req.method} ${req.url} : ${res.statusCode}`);
    next();
});

//GET
Router.get('/categories', getCategories);
Router.get('/category/:id', getCategory);
Router.get('/products', getProducts);
Router.get('/product/:id', getProduct);

export default Router;
