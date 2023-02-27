import mongoose from 'mongoose';
import Product from '../products/products-schema'

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    email: string,
    shippingAddress?: string,
    cart?: Array<typeof Product>
}