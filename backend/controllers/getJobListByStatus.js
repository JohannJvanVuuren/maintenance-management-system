import db from '../db/conn.js';
import { ObjectId } from 'mongodb';
import Job from '../model/Job.js'
import req from "express/lib/request.js";
import res from "express/lib/response.js";

export const getJobListByStatus = async (req, res) => {
    const collection = await db.collection('jobs');
    const result = await collection.find({}).sort({status: -1}).toArray();

    res.send(result).status(200);

}