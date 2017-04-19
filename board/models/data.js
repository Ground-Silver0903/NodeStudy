var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema  = new Schema({
    name : 'String',
    age : 'Number',
    school : 'String',
    friend : 'String'
});


module.exports = mongoose.model('user',userSchema);