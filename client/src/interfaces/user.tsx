/**
 * Represents the data required for user login.
 */
interface LoginData {
    /**
     * The email address of the user.
     */
    email: string;

    /**
     * The password associated with the user's account.
     */
    password: string;
}

/**
 * Represents the data required for user registration, which includes
 * login data and additional information for registration.
 */
interface RegisterData extends LoginData {
    /**
     * The desired username for the user's account.
     */
    username: string;
}

/**
 * The `LoginData` interface represents the structure of data required for user login.
 * It includes the user's email address and associated password.
 * @interface LoginData
 * @property {string} email - The email address of the user.
 * @property {string} password - The password associated with the user's account.
 */

/**
 * The `RegisterData` interface extends the `LoginData` interface and represents
 * the structure of data required for user registration.
 * In addition to login data, it includes the desired username for the user's account.
 * @interface RegisterData
 * @property {string} email - The email address of the user.
 * @property {string} password - The password associated with the user's account.
 * @property {string} username - The desired username for the user's account.
 */

/**
 * Exporting the `LoginData` and `RegisterData` interfaces for use in other modules.
 * @typedef {object} LoginData
 * @typedef {object} RegisterData
 */
export type { LoginData, RegisterData };
