const express = require('express');
const router = express.Router();
const db = require('../config/database');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios');

const User = require('../models/User');


//---------------------------
// ---  LANDING -------------
// --------------------------
router.get('/', (req,res) => {
  res.render('home')
}) 


module.exports = router;