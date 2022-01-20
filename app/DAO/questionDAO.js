import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import jwt from "jsonwebtoken";
import config from "../config";


const questionSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: true},
   // questionsDetails: {type: Array, required: true, unique: true},
}, {
    collection: 'question'
});
/*async function id(quiz) {
    const access = 'id';
    const quizData = {
        id: quiz.id,
        access:access

    };
    const value = jwt.sign(
        quizData,
        );*/
questionSchema.plugin(uniqueValidator);

const questionDAO = mongoose.model('question', questionSchema);

module.exports = questionDAO;

export default {
   // id: id,
    model: questionDAO,

};
