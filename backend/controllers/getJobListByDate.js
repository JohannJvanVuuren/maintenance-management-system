import db from '../db/conn.js';
import Job from '../model/Job.js'
import req from "express/lib/request.js";
import res from "express/lib/response.js";

export const getJobListByDate = async (req, res) => {
    const collection = await db.collection('jobs');
    const result = await collection.find({}).sort({date: -1}).toArray();

    res.send(result).status(200);

}