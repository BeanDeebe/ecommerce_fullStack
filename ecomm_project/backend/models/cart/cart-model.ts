import mongoose from 'mongoose';
import CartSchema from './cart-schema';

const CartModel = mongoose.model('CartModel', CartSchema);

export default CartModel;