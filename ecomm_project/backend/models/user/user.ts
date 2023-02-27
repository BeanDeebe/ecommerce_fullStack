import mongoose from 'mongoose';
import Cart from "../cart/cart";

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    email: string,
    shippingAddress?: string,
    cart?: Cart["products"]
}