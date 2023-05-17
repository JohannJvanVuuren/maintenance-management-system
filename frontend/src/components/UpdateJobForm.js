/* Import of the React hooks needed in this component */
import {useEffect, useState} from 'react';
/* Import of useLocation hook from React Router to get the state passed from UpdateInfoOfJob */
import {useLocation} from 'react-router-dom';
/* Import of the axios client to handle API requests to the backend */
import axios from 'axios';

import {dateFormatter} from "../helperFunctions/dateFormatter";

/* Import of main stylesheet generated by SCSS and preprocessor */
import '../scss/main.css';

/* Definition of the SubmitJob component that will be used to initially complete details
* about and submit a job for tracking */
export const UpdateJobForm = () => {

    /* Declaration and initialisation of state variables needed */
    const [id, setId] = useState(0);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    /* Instantiation of the useLocation hook */
    const locationHook = useLocation();

    /* Using the useEffect hook to set the values only once during rendering */
    useEffect(() => {

        setId(locationHook.state.id);
        setDate(dateFormatter(locationHook.state.date));
        setDescription(locationHook.state.description);
        setLocation(locationHook.state.location);
        setPriority(locationHook.state.priority);
        setStatus(locationHook.state.status);
    }, [locationHook.state.id, locationHook.state.date, locationHook.state.description, locationHook.state.location,
        locationHook.state.priority, locationHook.state.status]);


    const selectHandler = (event) => {
        setStatus(event.target.value);
    }

    /* The form's submit handler which also changes the status to 'Submitted' */
    const submitHandler = (event) => {

        event.preventDefault();

        /* Configurations for the axios request to the backend that will send the information to be
        * stored in the database */
        const url = `http://localhost:8000/updateJob`;
        const config = {
            id: id,
            date: date,
            description: description,
            location: location,
            priority: priority,
            status: status
        }

        /* The axios request to the backend */
        axios.post(url, config)
            .then(response => {
                console.log(response.data)
                return response.data
            })
            .catch(error => {
                console.log('Error', error.message);
            })
    }

    /* The rendering of the submit job input form. Inline styling had to be used in a few instances to
    * override the React-Bootstrap default styles */
    return (
        <div className={'submit-job-container'}>
            <form onSubmit={submitHandler}>
                <label htmlFor={'date'}>
                    Date:
                    <input
                        type={'date'}
                        id={'date'}
                        name={'date'}
                        value={`${date}`}
                        onChange={(event) => setDate(event.target.value)}
                        style={{
                            fontWeight:900,
                            color: '#800000'
                        }}
                    />
                </label>
                <label htmlFor={'id'}>
                    ID:
                    <input
                        type={'text'}
                        id={'id'}
                        name={'id'}
                        value={id}
                        readOnly
                        style={{
                            fontWeight:900,
                            color: '#800000'
                        }}
                    />
                </label>
                <label htmlFor={'description'}>
                    Description:
                    <input
                        type={'text'}
                        id={'description'}
                        name={'description'}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        style={{
                            fontWeight:900,
                            color: '#800000'
                        }}
                    />
                </label>
                <label htmlFor={'location'}>
                    Location:
                    <input
                        type={'text'}
                        id={'location'}
                        name={'location'}
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        style={{
                            fontWeight:900,
                            color: '#800000'
                        }}
                    />
                </label>
                <label
                    className={'label'}
                    htmlFor={'priority'}
                    /* Inline styling to override React-Bootstrap default styles */
                    style={{
                        marginTop: 1 + 'rem',
                    }}
                >
                    Priority:
                    <select
                        id={'priority'}
                        name={'priority'}
                        onChange={(event) => setPriority(event.target.value)}
                        style={{
                            fontWeight: 900,
                            color: '#800000'
                        }}

                    >
                        <option>{priority}</option>
                        <option value={'Routine'}>Routine</option>
                        <option value={'Urgent'}>Urgent</option>
                    </select>
                </label>
                <label
                    className={'label'}
                    htmlFor={'status'}
                    /* Inline styling to override React-Bootstrap default styles */
                    style={{
                        marginTop: 1 + 'rem'
                    }}
                >
                    Status:
                    <select
                        id={'status'}
                        name={'status'}
                        onChange={selectHandler}
                        style={{
                            fontWeight: 900,
                            color: '#800000'
                        }}
                    >
                        <option>{status}</option>
                        <option value={'In progress'}>In progress</option>
                        <option value={'Completed'}>Completed</option>
                    </select>
                </label>
                <input
                    className={'btn-submit'}
                    type={'submit'}
                    value={'Submit'}
                />
            </form>
        </div>
    )
}