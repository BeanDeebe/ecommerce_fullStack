import {Request, Response} from 'express';

export default interface CartControllerI {
    createCart(req: Request, res: Response): void;
    updateCart(req: Request, res: Response): void;
    deleteCart(req: Request, res: Response): void;
}