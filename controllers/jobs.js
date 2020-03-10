const db = require('../models');

// CREATE JOB
const create = async (req, res) => {
  try {
    console.log('Creating JOB...')
    const createdJob = await db.Job.create({ ...req.body});
    const responseObj = {
      id: createdJob._id,
      jobName: createdJob.jobName,
      client: createdJob.client,
      location: createdJob.location,
      address: createdJob.address,
      city: createdJob.city,
      long: createdJob.long,
      lat: createdJob.lat,
      type: createdJob.type,
      siteContact: createdJob.siteContact,
      trailer: createdJob.trailer,
      droppedDate: createdJob.droppedDate,
      droppedBy: createdJob.droppedBy,
      pickedDate: createdJob.pickedDate,
      pickedBy: createdJob.pickedBy,
      status: createdJob.status,
      price: createdJob.price,
      paid: createdJob.paid
    };
    res.status(200).json(responseObj);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Job CREATE failed...', error: error });
  };
};

// SHOW one JOB
const show = async (req, res) => {
  try {
    console.log('Showing JOB...')
    // need to add .populate('trailer')
    const foundJob = await db.Job.findById(req.params.id);
    const Job = {
      id: foundJob._id,
      jobName: foundJob.jobName,
      client: foundJob.client,
      location: foundJob.location,
      address: foundJob.address,
      city: foundJob.city,
      long: foundJob.long,
      lat: foundJob.lat,
      type: foundJob.type,
      siteContact: foundJob.siteContact,
      trailer: foundJob.trailer,
      droppedDate: foundJob.droppedDate,
      droppedBy: foundJob.droppedBy,
      pickedDate: foundJob.pickedDate,
      pickedBy: foundJob.pickedBy,
      status: foundJob.status,
      price: foundJob.price,
      paid: foundJob.paid
    };
    res.status(200).json(Job);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Job SHOW failed...', error: error });
  };
};

// SHOW ALL JOBS
const showAll = async (req, res) => {
  console.log('Showing ALL JOBS...')
  try {
    const allJobs = await db.Job.find(req.query);
    res.status(200).json(allJobs);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'SHOW ALL failed...', error: error });
  };
};


module.exports = {
  create,
  show,
  showAll
}
