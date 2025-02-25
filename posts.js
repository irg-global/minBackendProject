const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/postsData`);


const postModel = mongoose.Schema({
    name : String,
    description : String,
    imageUrl : String,
});

module.exports = mongoose.model('post', postModel);

