import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import Shops from "./src/shops/shops.model";
import db from "./src/db";
import Products from "./src/products/products.model";
import Specs from "./src/specs/specs.model";
import dbMock from "./src/db-mock";
import dbLoad from "./src/db-load";

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server!!!');
});
app.use(bodyParser());
app.use('/shops', require('./src/shops/shops.router'));
app.use('/categories', require('./src/categories/categories.router'));
app.use('/products', require('./src/products/products.router'));
app.use('/specs', require('./src/specs/specs.router'));
app.use('/images', require('./src/images/images.router'));
app.use('/cart', require('./src/cart/cart.router'))

app.listen(port, async () => {
    try {
        await dbLoad()
        await dbMock()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`[server]: Server is running at http://localhost:${port}`);
});