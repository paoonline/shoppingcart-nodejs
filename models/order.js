var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moment = require('moment');
var hourFromNow = function(){
    return moment().add(7, 'hour');
};

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true},
    time : { type : Date, default: hourFromNow}
});

module.exports = mongoose.model('Order', schema);





