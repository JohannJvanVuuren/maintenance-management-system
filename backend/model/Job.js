/* Creation of the schema of the database. The Mongoose documentation
* was used as reference and not the Hyperion notes. */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

let jobSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Submitted'
    }
})

/* The creation of the model also based on the Mongoose documentation */
const Job = model('Job', JobSchema);

export default Job;