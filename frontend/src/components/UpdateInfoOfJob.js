/* Import of the axios client to handle requests to the backend */
import axios from 'axios';
/* Import of Link component from React Router to transfer state information to UpdateJobForm */
import {Link} from 'react-router-dom';
/* Import of React hooks used in this component */
import {useEffect, useState} from "react";

/* Import of main stylesheet generated by SCSS and preprocessor */
import '../scss/main.css';
/* Import of React-Bootstrap styled components */
import Table from 'react-bootstrap/Table';
import {dateFormatter} from "../helperFunctions/dateFormatter";

/* Definition of the ListJobsByDate component. The purpose of this component is to simply display
* all jobs in the database */
export const UpdateInfoOfJob = () => {

    /* Declaration and initialisation of the state variable needed in this component */
    const [jobs, setJobs] = useState([]);

    /* A useEffect hook to run the axios call to the backend to retrieve the required information from
    * the database */
    useEffect(() => {

        /* Setup of configuration of the axios call */
        const url = 'http://localhost:8000/getJobListByDate';
        const config = {
            field: 'date'
        }

        /* axios call to the .../getJobListByDate endpoint to get the information that needs to be displayed
        * in this component */
        axios.get(url, config)
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.log('Error', error.message);
            })
    }, []); //No dependencies, so the hook will only run once when the page is rendered

    return (
        <div>
            <h1 className={'section-titles'}>Update Details</h1>
            {/* Rendering of a React-bootstrap table suited for this purpose */}
            <Table
                striped bordered hover variant="dark"
                responsive
                className={'mt-5 table'}
            >
                <thead>
                <tr className={'table-header'}>
                    <th className={'h3'}>Unique Ref. No.</th>
                    <th className={'h3'}>Date</th>
                    <th className={'h3'}>Description</th>
                    <th className={'h3'}>Location</th>
                    <th className={'h3'}>Priority</th>
                    <th className={'h3'}>Status</th>
                    <th className={'h3'}>Click to update</th>
                </tr>
                </thead>
                <tbody>
                {/* The data is received back as an array of objects. So the Array.map method is used to map loop
                 through the array and display the data of the individual job objects */}
                {jobs.map((job, index) => {
                    /* Only non-archived documents are displayed */
                    if (job.archive === false) {
                        return (
                            <tr key={index} className={'table-row'}>
                                <td className={'h5'}>{job._id}</td>
                                <td className={'h5'}>{dateFormatter(job.date)}</td>
                                <td className={'h5'}>{job.description}</td>
                                <td className={'h5'}>{job.location}</td>
                                <td className={'h5'}>{job.priority}</td>
                                <td className={'h5'}>{job.status}</td>
                                <td>
                                    <Link
                                        to={'/updateJobForm'}
                                        className={'btn-update'}
                                        state={{
                                            id: job._id,
                                            date: job.date,
                                            description: job.description,
                                            location: job.location,
                                            priority: job.priority,
                                            status: job.status
                                        }}
                                    >
                                        <button
                                            className={'btn-update'}
                                        >
                                            Update
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    } else {
                        return (
                            <tr>
                                <td colSpan={7}>
                                </td>
                            </tr>
                        )
                    }
                })}
                </tbody>
            </Table>
        </div>
    )
}