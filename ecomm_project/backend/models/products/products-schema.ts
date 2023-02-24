import mongoose from 'mongoose';
import Product from './product-model';

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {collection: 'products'});

export default ProductSchema