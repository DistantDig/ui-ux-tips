const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/api/diagnostics', (req, res) => {
  res.json(`${req.method} request received to get diagnostics`);

  console.log(`${req.method} request received to get diagnostics`);
});

// POST Route for a error logging
diagnostics.post('/api/diagnostics', (req, res) => {
  console.log(`${req.method} request received to add diagnostic info`);

  const { time, error_id, errors } = req.body;

  if(time && error_id && errors) {
    const newDiagnostic = {
      time,
      error_id: uuidv4(),
      errors
    }
  }
});

module.exports = diagnostics;
