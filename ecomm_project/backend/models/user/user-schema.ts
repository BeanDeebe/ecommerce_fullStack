import mongoose from 'mongoose';
import Cart from '../cart/cart-schema'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        type: typeof Cart,
        required: false,
    },
    shippingAddress: {
        type: String,
        required: false
    }
}, {collection: 'users'});

export default UserSchema