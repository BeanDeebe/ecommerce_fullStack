import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    products : {
        type: Array,
        required: false
    },

    totalPrice: {
        type: Number,
        required: true
    },

    shippingInformation: {
        type: String,
        required: false
    },

    paymentInformation: {
        type: String,
        required: false
    },

    user : {
        type: String,
        required: true
    }


})

export default CartSchema;