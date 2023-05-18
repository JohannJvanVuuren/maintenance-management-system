/*
* This file contains all the controllers for the backend of this application
* */

/* Module dependencies */
import Job from '../model/Job.js'
import {ObjectId} from "mongodb";

/* Create new job documents controller. The Mongoose save() method is used. */
export const create = async (req, res) => {
    const newJob = new Job(req.body);

    try {
        await newJob.save();
        res.send(newJob).status(200);
    } catch (err) {
        res.status(500).send({message: 'There was an error while creating the new job'});
    }
}

/* Get jobs arranged by dates (descending order). The Mongoose sort() method is used.  */
export const getJobListByDate = async (req, res) => {
    try {
        const sortedByDate = await Job.find({}).sort({date: -1});
        res.send(sortedByDate).status(200);
    } catch (err) {
        res.status(500).send({message: 'There was an error while retrieving the jobs.'})
    }
}

/* Get jobs arranged by status (reverse alphabetical). The Mongoose sort() method is again used. */
export const getJobListByStatus = async (req, res) => {
    try {
        const sortedByStatus = await Job.find({}).sort({status: -1});
        res.send(sortedByStatus).status(200);
    } catch (err) {
        res.status(500).send({message: 'There was an error while retrieving the jobs.'})
    }
}

/* Filtering out jobs by status. I.e., Only jobs of the chosen status appears on the frontend. The
* Mongoose find() method is used  */
export const filterJobsByStatus = async (req, res) => {

    try {
        const jobsFilteredByStatus =  await Job.find({'status': req.params.status})
        res.send(jobsFilteredByStatus).status(200);
    } catch (err) {
        res.status(500).send({message: 'There was an error while retrieving the jobs.'})
    }
}

/* Finding a specific job by use of its unique id. The findById() method is used. */
export const findJob = async (req, res) => {

    const query = {_id: new ObjectId(req.params.id)};

    try {

        const job = await Job.findById(query);

        if (!job) {
            res.status(404).send({message: 'No such document were found.'});
        } else {
            res.send(result).status(200);
        }

    } catch (err) {
        res.status(500).send({message: 'There was an error while trying to find the job.'})
    }
}

/* Updating a job by its unique id. The Mongoose findOneAndUpdate method is used. */
export const updateJob = async (req, res) => {

    const query = {_id: new ObjectId(req.body.id)};
    const updates = {
        date: req.body.date,
        description: req.body.description,
        location: req.body.location,
        priority: req.body.priority,
        status: req.body.status
    };

    try {
        const updatedJob = await Job.findOneAndUpdate(query, updates, {new: true});
        res.send(updatedJob).status(200);
    } catch (err) {
        res.status(500).send({message: 'There was an error while updating the jobs.'})
    }
}

/* A controller to facilitate the bulk update of statuses of jobs. A for loop together with
* the Mongoose findOneAndUpdate() method is used */
export const  bulkStatusChange = async (req, res) => {

    const jobs = req.body.jobs;

    try {
        /* The for loop is used to iterate over an array of objects from the frontend */
        for (const job of jobs) {
            await Job.findOneAndUpdate(
                {_id: new ObjectId(job._id)},
                {status: job.status},
                {new: true}
            )
        }
    } catch (err) {
        res.status(500).send({message: 'There was an error while performing the bulk.'})
    }
}

/* This controller facilitates the archival of item together with some JSX on the frontend.
* The variable __v is set to true when a document is archived and the frontend displays
* documents based on the presence of this "marker" or not. */
export const archiveJob = async (req, res) => {

    const query = {_id: new ObjectId(req.params.id) };

    try {
        await Job.findOneAndUpdate(query, {archive: true});
        res.status(200);
    } catch (err) {
        res.status(500).send({message: 'There was an error while trying to archive the job.'})
    }
}