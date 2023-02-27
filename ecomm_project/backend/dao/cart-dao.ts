import CartDaoI from '../interfaces/cart-dao-I';
import CartModel from '../models/cart/cart-model';
import Cart from '../models/cart/cart';

export default class CartDao implements CartDaoI {
    private static cartDao: CartDao | null = null;

    public static getInstance = (): CartDao => {
        if (CartDao.cartDao === null) {
            CartDao.cartDao = new CartDao();
        }
        return CartDao.cartDao;
    }

    private constructor(){}

    createCart = async (cart: Cart): Promise<any> => {
        CartModel.create(cart);
    }

    updateCart = async (cid: string, cart: Cart): Promise<any> => {
        return CartModel.updateOne(
            {_id: cid},
            {$set: cart}
        );
    }

    deleteCart = async (cid: string): Promise<any> => {
        return CartModel.deleteOne({_id: cid});
    }
}