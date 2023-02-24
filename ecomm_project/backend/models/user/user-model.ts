import mongoose from 'mongoose';
import UserSchema from './user-schema';

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;