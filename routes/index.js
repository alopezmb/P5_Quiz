const {indexController,creditsController,quizzesController}=require('../controllers/controllers');
const {models}=require('../models/index');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', indexController);

/* GET credits */
router.get('/credits', creditsController);

/*GET quizzes*/

router.get('/quizzes', quizzesController);






module.exports = router;
