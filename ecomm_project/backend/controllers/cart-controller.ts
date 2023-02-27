import CartDao from "../dao/cart-dao";
import Cart from "../models/cart/cart";
import {Express, Request, Response} from "express";
import CartControllerI from "./cart-controller-I";

export default class CartController implements CartControllerI {
    private static cartDao: CartDao = CartDao.getInstance();
    private static cartController: CartController | null = null;

    public static getInstance = (app: Express): CartController => {
        if (CartController.cartController === null) {
            CartController.cartController = new CartController();

            app.post("/api/users/cart", CartController.cartController.createCart);
            app.put("/api/users/cart/:cid", CartController.cartController.updateCart);
            app.delete("/api/users/cart/:cid", CartController.cartController.deleteCart);
        }
        return CartController.cartController;
    }

    private constructor() {}

    createCart = (req, res) => {
        CartController.cartDao.createCart(req.body).then((cart: Cart) => res.json(cart));
    }

    updateCart = (req, res) => {
        CartController.cartDao.updateCart(req.params.cid, req.body).then(status => res.send(status));
    }

    deleteCart = (req, res) => {
        CartController.cartDao.deleteCart(req.params.cid).then(status => res.send(status));
    }
}