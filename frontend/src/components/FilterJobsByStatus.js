/* Import of axios client to make API calls to the backend of the application */
import axios from "axios";

/* Import of the React hooks used in this component */
import {useEffect, useState} from "react";

/* Import of main stylesheet generated by SCSS and preprocessor */
import '../scss/main.css';
/* Import of React-Bootstrap styled component */
import Table from "react-bootstrap/Table";

export const FilterJobsByStatus = () => {
    /* Declaration and initialisation of the state variable needed in this component */
    const [jobs, setJobs] = useState([]);
    const [status, setStatus] = useState('');

    /* A useEffect hook to run the axios call to the backend to retrieve the required information from
    * the database */

    useEffect(() => {
        /* Setup of configuration of the axios call */
        const url = `http://localhost:8000/filterJobsByStatus/${status}`;

        /* axios call to the .../filterJobsByStatus endpoint to get the information that needs to be displayed
        * in this component */
        axios.get(url)
            .then(response => {
                setJobs(response.data);
                console.log(response);
                return response.data;
            })
            .catch(error => {
                console.log('Error', error.message);
            })
    }, [status]);

    return (
        <div className={'filter-by-status-container'}>
            <h1 className={'section-titles'}>Filter Jobs by status</h1>
            {/* Allowing the user to select a desired status and then setting the Status state to that choice */}
            <select value={status} onChange={(event) => {
                event.preventDefault();
                setStatus(event.target.value);
            }}>
                <option className={'items'} disabled={true}>--Please select a filter--</option>
                <option className={'items'} value={'Submitted'}>Submitted</option>
                <option className={'items'} value={'In progress'}>In progress</option>
                <option className={'items'} value={'Completed'}>Completed</option>
            </select>
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
                            <td className={'h5'}>{(job.date).slice(0, 10)}</td>
                            <td className={'h5'}>{job.description}</td>
                            <td className={'h5'}>{job.location}</td>
                            <td className={'h5'}>{job.priority}</td>
                            <td className={'h5'}>{job.status}</td>
                        </tr>
                    )} else {
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