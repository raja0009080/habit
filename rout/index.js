const express = require('express');
const router = express.Router();

// getting homepage controller
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);
// create-habit is used for post in ejs createHabit is is of controller
router.post('/create-habit',homeController.creatHabit);
// delete habit route
router.get('/delete-habit/',homeController.deleteHabit);
// use details routes
// router.use('/details',require('./user'))


module.exports=router;