const {models}=require('../models/index');

/*Index Controller*/
const indexController=(req, res, next)=> {
    res.render('index', { title: 'Express'});
};

/*Credits controller*/
const creditsController=(req, res, next)=> {

    res.render('credits', { author: 'Alejandro López Martínez'});
};

const quizzesController=(req, res, next)=> {

    models.quiz.findAll().then(quizzes=>{
        res.render('quizzes/index.ejs', { quizzes:quizzes});
        }) .catch(error => {
            errorlog(error.message);

        });
};


module.exports={indexController,creditsController,quizzesController} ;