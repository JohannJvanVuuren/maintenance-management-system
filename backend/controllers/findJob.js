import db from '../db/conn.js';
import { ObjectId } from 'mongodb';
import Job from '../model/Job.js'
import req from "express/lib/request.js";
import res from "express/lib/response.js";

export const findJob = async (req, res) => {
    const collection = await db.collection('jobs');
    const query = {_id: new ObjectId(req.params.id)};
    const result = await collection.findOne(query);

    if (!result) {
        res.send('Document not found').status(404);
    } else {
        res.send(result).status(200);
    }
}