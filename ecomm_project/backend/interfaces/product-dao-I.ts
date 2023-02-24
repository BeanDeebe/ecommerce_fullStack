import Product from "../models/products/product";

export default interface ProductDaoI {
    findProductByProductName (productName: string): Promise<any>;
    findProductById (pid: string): Promise<any>;
    createProduct (product: Product): Promise<Product>;
    updateProduct(pid: string, product: Product): Promise<any>;
    deleteProduct(pid: string): Promise<any>;
}