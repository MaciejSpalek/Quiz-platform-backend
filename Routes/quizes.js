const router = require('express').Router();
const Quiz = require('../model/Quiz');

router.post('/addQuiz', async (req, res) => {
    const quiz = new Quiz({
        title: req.body.title,
        author: req.body.author,
        amountOfQuestions: req.body.amountOfQuestions,
        colors: req.body.colors,
        iconName: req.body.iconName,
        questions: req.body.questions
    });

    try {
        const savedQuiz = await quiz.save();
        res.send(savedQuiz)
    } catch(error) { 
        res.send(error)
    }
});

router.get('/userQuizzes', async (req, res) => {
    const { author } = req.query;
    const quiz = await Quiz.find({author});
    res.json(quiz);
});


router.get('/allQuizzes', async (req, res) => {
    const quizzes = await Quiz.find({});
    res.json(quizzes);
});

router.get('/singleQuiz', async (req, res) => {
    const { id } = req.query;
    try {
        const quiz = await Quiz.findById(id);
        res.json(quiz);
    } catch(error) { 
        res.status(400).json({
            message: "Wrong quiz id"
        });
    }
});


module.exports = router;