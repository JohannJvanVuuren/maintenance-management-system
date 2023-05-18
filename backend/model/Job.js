/* Creation of the schema of the database. The Mongoose documentation
* was used as reference and not the Hyperion notes. */
import mongoose from 'mongoose';

const { Schema } = mongoose;

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
            required: true
        },
        archive: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    /* The creation of the model also based on the Mongoose documentation */
    const Job = mongoose.model('Job', jobSchema);

export default Job;