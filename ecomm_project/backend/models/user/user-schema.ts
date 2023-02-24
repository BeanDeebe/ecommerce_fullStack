import mongoose from 'mongoose';


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
        type: Array,
        required: false,
    },
    shippingAddress: {
        type: String,
        required: false
    }
}, {collection: 'users'});

export default UserSchema