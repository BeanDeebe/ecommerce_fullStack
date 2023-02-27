import ProductModel from "../models/products/product-model";
import Product from "../models/products/product";
import ProductDaoI from "../interfaces/product-dao-I";

export default class ProductDao implements ProductDaoI {
    private static productDao: ProductDao | null = null;

    public static getInstance = (): ProductDao => {
        if (ProductDao.productDao === null) {
            ProductDao.productDao = new ProductDao();
        }
        return ProductDao.productDao;
    }
    
    private constructor() {

    }
    
    createProduct = async (product: Product): Promise<any> =>
        ProductModel.create(product);
    
    updateProduct = async(pid: string, product: Product): Promise<any> =>{
        return ProductModel.updateOne(
            {_id: pid},
            {$set: product});
    }
    
    deleteProduct = async(pid: string): Promise<any> => {
        return ProductModel.deleteOne({_id: pid});
    }

    findAllProducts = async(): Promise<any> => {
        return ProductModel.find();
    }
}