import mongoose from 'mongoose';

export default interface Product {
    _id?: mongoose.Schema.Types.ObjectId,
    productName: string,
    price: number,
    description: string,
}