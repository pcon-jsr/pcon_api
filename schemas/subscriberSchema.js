const mongoose=require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email : String,
  time :{type:Date , default:Date.now}
});

const subscribers= mongoose.model('Subscriber',subscriberSchema);
module.exports=subscribers;
