import {Request, Response} from 'express';

export default interface UserControllerI {
    createUser(req: Request, res:Response): void;
    updateUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
}