import User from "../models/user/user";

/**
 * @file Declares API for Users related data access object methods
 */
export default interface UserDaoI {
    createUser (user: User): Promise<User>;
    updateUser (uid: string, user: User): Promise<any>;
    deleteUser (uid: string): Promise<any>;
}