import {Request, Response} from 'express';

export default interface ProductControllerI {
    createProduct(req:Request, res:Response): void;
    updateProduct(req:Request, res:Response): void;
    deleteProduct(req:Request, res:Response): void;
};