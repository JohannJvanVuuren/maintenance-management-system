/* This controller is for creating new records */
const saveNewJob = (req, res) => {
    const newJob = {
        date: req.body.date,
        description: req.body.description,
        location: req.body.location,
        priority: req.body.priority
    }
}

export { saveNewJob }