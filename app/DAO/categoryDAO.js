import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const categorySchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: true},
}, {
    collection: 'question'
});

categorySchema.plugin(uniqueValidator);

const categoryDAO = mongoose.model('category', categorySchema);

module.exports = categoryDAO;

export default {
    model: categoryDAO,
};
