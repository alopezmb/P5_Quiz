const {models}=require('../models/index');

/*Index Controller*/
const indexController=(req, res, next)=> {
    res.render('index', { title: 'Core Quiz 2018'});
};

/*Credits controller*/
const creditsController=(req, res, next)=> {

    res.render('credits', {title: 'Credits', author: 'Alejandro López Martínez'});
};

const quizzesController=(req, res, next)=> {

    models.quiz.findAll().then(quizzes=>{
        res.render('quizzes/index.ejs', {title:'Lista de Quizzes', quizzes:quizzes});
        }) .catch(error => {
            errorlog(error.message);

        });
};


module.exports={indexController,creditsController,quizzesController} ;