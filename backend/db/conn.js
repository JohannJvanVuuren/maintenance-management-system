/* Import and configuration of dotenv to access variables in the .env file*/
import * as dotenv from "dotenv";
dotenv.config();

/* Import of the MongoClient class used for making connections to MongoDB. */
import { MongoClient } from 'mongodb';

/* The connection string needed to connect to the MMSDB database */
const connectionString = process.env.MONGODB_CONNECTION_STRING || '';

/* Creating an instance of MongoClient with the connection string as argument */
const client = new MongoClient(connectionString);

/* Attempting and establishing a connection with the MMSDB database */
let conn;
try {
    conn = await client.connect();
} catch (error) {
    console.log('Error', error.message);
}

/* Defining the database connection and then exporting it */
let db = conn.db('MMSDB');

export default db;