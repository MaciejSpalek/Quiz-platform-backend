const Score = require("../model/Score");
const User = require("../model/User");
const Quiz = require("../model/Quiz");

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

exports.getSingleUser = async (req, res) => {
  const { name } = req.query;
  const userExist = await User.findOne({ name });
  res.json(userExist);
};

exports.getAllNames = async (req, res) => {
  const users = await User.find({}, "name");
  res.json(users);
};

exports.getAllUserScores = async (req, res) => {
  const { executor } = req.query;
  const scores = await Score.find({ executor });
  res.json(scores);
};

exports.getAllUserQuizzes = async (req, res) => {
  const { author } = req.query;
  const quiz = await Quiz.find({ author }).sort({ _id: -1 });
  res.json(quiz);
};

exports.getSingleScore = async (req, res) => {
  const { executor, quizID } = req.query;
  const scores = await Score.find({ executor, quizID });
  res.json(scores);
}