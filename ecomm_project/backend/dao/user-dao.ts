import UserModel from '../models/user/user-model';
import User from "../models/user/user";
import UserDaoI from "../interfaces/user-dao-I";

export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;


    /**
     * singleton DAO instance
     */
    public static getInstance = (): UserDao => {
        if (UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }

    private constructor() {
    }

     /**
     * Uses UserModel to retrieve single user document from users collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when user is retrieved from the database
     */
    findUserById = async (uid: string): Promise<any> => {
        return UserModel.findById(uid);
    }

    /**
     * Uses UserModel to retrieve all users from users collection
     */
    findAllUsers = async (): Promise<any> => {
        return UserModel.find();}

    /**
     * Uses UserModel to retrieve single user document from users collection
     * by their username
     * @param {string} username User's username
     * @returns Promise To be notified when user is retrieved from the database
     */
    findUserByUsername = async (username: string): Promise<any> =>
        UserModel.findOne({username: username});

    /**
     * Inserts user instance into the database
     * @param {User} user Instance to be inserted into the database
     * @returns Promise To be notified when user is inserted into the database
     */
    createUser = async (user: User): Promise<User> => {
        const newUser = UserModel.create(user);
        return newUser;
    }

    /**
     * Updates user with new values in database
     * @param {string} uid Primary key of user to be modified
     * @param {User} user User object containing properties and their new values
     * @returns Promise To be notified when user is updated in the database
     */
    updateUser = async (uid: string, user: User): Promise<any> => {
        return UserModel.updateOne(
            {_id: uid},
            {$set: user});
    }

    /**
     * Removes user from the database.
     * @param {string} uid Primary key of user to be removed
     * @returns Promise To be notified when user is removed from the database
     */
    deleteUser = async (uid: string): Promise<any> => {
        return UserModel.deleteOne({_id: uid});
    }
}