import ProductDao from "../dao/product-dao";
import Product from "../models/products/product";
import {Express, Request, Response} from "express";
import ProductControllerI from "./products-controller-I";

export default class ProductController implements ProductControllerI {
    private static productDao: ProductDao = ProductDao.getInstance();
    private static productController: ProductController | null = null;


    public static getInstance = (app: Express): ProductController => {
        if (ProductController.productController === null) {
            ProductController.productController = new ProductController();

            app.get("/api/products", ProductController.productController.findAllProducts);
            app.post("/api/products", ProductController.productController.createProduct);
            app.get("/api/products/:pid", ProductController.productController.findProductById);
            app.get("/api/products/:pid", ProductController.productController.deleteProduct);
            app.get("/api/products/:pid", ProductController.productController.updateProduct);
            app.get("/api/products/:productName", ProductController.productController.findProductByProductName);
        }
        return ProductController.productController;
    }

    private constructor() {}

    findAllProducts = (req: Request, res: Response) => {
        ProductController.productDao.findAllProducts().then((products: Product[]) => res.json(products));
    }

    findProductByProductName = (req: Request, res: Response) => {
        ProductController.productDao.findProductByProductName(req.params.productName).then((product: Product) => res.json(product));
    }

    findProductById = (req: Request, res: Response) =>
        ProductController.productDao.findProductById(req.params.pid).then((product:Product)=> res.json(product));

    createProduct = (req: Request, res: Response) => {
        ProductController.productDao.createProduct(req.body).then((product:Product) => res.json(product));
    }

    updateProduct = (req: Request, res: Response) => {
        ProductController.productDao.updateProduct(req.params.pid, req.body).then(status => res.send(status));
    }

    deleteProduct = (req: Request, res: Response) => {
        ProductController.productDao.deleteProduct(req.params.pid).then(status => res.send(status));
    }
    
}