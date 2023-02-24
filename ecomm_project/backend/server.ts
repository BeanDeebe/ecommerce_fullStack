import express, {Request, Response} from 'express';
import mongoose from 'mongoose';

//import controllers here
import ProductController from "./controllers/products-controller";

/**
 * @const {string} Represents the connection string for MongoDB Community connection
 */
const connectionString = "mongodb://localhost:27017/duck-db"
mongoose.connect(connectionString)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

/**
 * @const {Express} Represents the express app
 */
const app = express();
app.use(express.json());


/**
 * Route to check if service is running
 * @param {string} path Base path of API
 * @param {callback} middleware Express middleware
 */
app.get('/', (req: Request, res: Response) => {
    res.send('Running!')
});

ProductController.getInstance(app);

const PORT = 4000
app.listen(process.env.PORT || PORT);