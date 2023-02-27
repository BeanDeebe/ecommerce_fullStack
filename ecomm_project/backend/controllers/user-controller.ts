import UserDao from "../dao/user-dao";
import User from "../models/user/user";
import {Express, Request, Response} from "express";
import UserControllerI from "./user-controller-I";

export default class UserController implements UserControllerI {
    private static userDao: UserDao = UserDao.getInstance();
    private static userController: UserController | null = null;

    public static getInstance = (app: Express): UserController => {
        if (UserController.userController === null) {
            UserController.userController = new UserController();

            app.get("/api/users", UserController.userController.findAllUsers);
            app.post("/api/users", UserController.userController.createUser);
            app.delete("/api/users/:uid", UserController.userController.deleteUser);
            app.put("/api/users/:uid", UserController.userController.updateUser);
        }

        return UserController.userController;
    }
    private constructor() {}

    findAllUsers = (req: Request, res: Response) => {
        UserController.userDao.findAllUsers().then((users: User[]) => res.json(users));
    }

    createUser = (req: Request, res: Response) => {
        UserController.userDao.createUser(req.body).then((user: User) => res.json(user));
    }

    deleteUser = (req: Request, res: Response) => {
        UserController.userDao.deleteUser(req.params.uid).then(status => res.send(status));
    }

    updateUser = (req: Request, res: Response) => {
        UserController.userDao.updateUser(req.params.uid, req.body).then(status => res.send(status));
    }
}


