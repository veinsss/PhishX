import { Client, Account, ID, Databases, Query } from "react-native-appwrite";
import { router } from "expo-router";

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.strawhats.phishx",
    projectID: "663b6a3800019fe3ff8a",
    databaseID: "663b6b7c003e1d0eb46a",
    userCollectionID: "663b6ba0000edad0b77d",
    storageBucketID: "663b6d09001c56c898f5",
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectID) // Your project ID
    .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const databases = new Databases(client);

// export async function createUser(email, password, username) {
//     try {
//         const newAccount = await account.create(
//             ID.unique(),
//             email,
//             password,
//             username
//         );

//         if (!newAccount) throw Error;

//         await signIn(email, password);

//         const newUser = await databases.createDocument(
//             appwriteConfig.databaseID,
//             appwriteConfig.userCollectionID,
//             ID.unique(),
//             {
//                 accountID: newAccount.$id,
//                 email: email,
//                 username: username,
//             }
//         );

//         return newUser;
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// export async function signIn(email, password) {
//     try {
//         const session = await account.createEmailPasswordSession(email, password)
//         return session
//     } catch (error) {
//         throw new Error(error);
//     }
// }

export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const newUser = await databases.createDocument(
            appwriteConfig.databaseID,
            appwriteConfig.userCollectionID,
            ID.unique(),
            {
                accountID: newAccount.$id,
                email: email,
                username: username,
            }
        );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

// Sign In
export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        return session;
    } catch (error) {
        throw new Error(error);
    }
}
