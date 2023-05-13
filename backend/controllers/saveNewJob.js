import db from '../db/conn.js';
import Job from '../model/Job.js'
import req from "express/lib/request.js";
import res from "express/lib/response.js";

export const saveNewJob = async (req, res) => {
    const collection = await db.collection('jobs');
    const newJob = new Job({
        date: req.body.date,
        description: req.body.description,
        location: req.body.location,
        priority: req.body.priority,
        status: req.body.status
    })
    const result = await collection.insertOne(newJob);
    res.send(result).status(204);
}