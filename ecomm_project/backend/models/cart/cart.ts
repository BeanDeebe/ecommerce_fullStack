import mongoose from 'mongoose';
import Product from '../products/product';
import User from '../user/user';

export default interface Cart {
    _id?: mongoose.Schema.Types.ObjectId,
    products: Array<Product>,
    totalPrice: Number,
    shippingInformation: String,
    paymentInformation: String,
    user: User["username"]
}