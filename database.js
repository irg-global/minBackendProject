const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/minProject`);


const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    address : String,
    email : String,
    password : String,
});


module.exports = mongoose.model('user', userSchema);