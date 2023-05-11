/* Importing the database connection */
import db from '../db/conn.js'
/* Import of primary key identifier */
import { ObjectId } from 'mongodb';
/* Importing the Job model */
import Job from '../model/Job.js';

/* Controller for inserting new records into the database */
const saveNewJob = async (req, res) => {
    const newJob = new Job({
        date: req.body.date,
        description: req.body.description,
        location: req.body.location,
        priority: req.body.priority
    });

    const collection = await db.collection('jobs');
    const result = await collection.insertOne(newJob);

    res.send(result).status(204);
}

/* Controller to get the list of all jobs from the database */
const getJobList = async (req, res) => {
    const collection = await db.collection('jobs');
    const result = await collection.find({}).toArray();

    res.send(result).status(200);
}

/* Controller for getting a single job from the database */
const findJob = async (req, res) => {
    const collection = await db.collection('jobs');
    const query = {_id: new Object(req.params.id)};
    const result = await collection.findOne(query);

    if (!result) {
        res.send("Not found").status(404);
    } else {
        res.send(result).status(200);
    }
}

/* Controller for updating a job by id */
const updateJob = async (req, res) => {
    const query = {_id: new ObjectId(req.params.id)};
    const update = {
        $set: {
            date: req.body.date,
            description: req.body.description,
            location: req.body.location,
            priority: req.body.priority,
            status: req.body.status
        }
    };

    const collection = await db.collection('jobs');
    const result = await collection.updateOne(query, update);

    res.send(result).status(200);
}

/* A controller to delete jobs. The requirement is to archive jobs, but option is only
* available on the paid clusters of Atlas, so delete is the only option available */
const deleteJob = async (req, res) => {

}

export { saveNewJob, getJobList, findJob, updateJob, deleteJob }