import Cart from "../models/cart/cart";

export default interface CartDaoI {
    createCart (cart : Cart): Promise<Cart>;
    updateCart (cid: string, cart: Cart): Promise<any>;
    deleteCart (cid: string): Promise<any>;
}