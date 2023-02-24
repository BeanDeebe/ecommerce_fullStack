import mongoose from 'mongoose';
import ProductSchema from './products-schema';

const ProductModel = mongoose.model('ProductModel', ProductSchema);

export default ProductModel;