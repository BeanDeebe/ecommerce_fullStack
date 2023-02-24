import {Request, Response} from 'express';

export default interface ProductControllerI {
    findProductByProductName(req: Request, res: Response): void;
    findProductById(req:Request, res:Response): void;
    createProduct(req:Request, res:Response): void;
    updateProduct(req:Request, res:Response): void;
    deleteProduct(req:Request, res:Response): void;
};