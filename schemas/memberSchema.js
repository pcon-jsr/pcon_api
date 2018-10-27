const mongoose=require('mongoose');

const memberSchema = new mongoose.Schema({
  name : String,
  year : String,
  designation : String,
  image : String,
  linkedin : String,
  git : String,
  fb : String
});


const members= mongoose.model('Member',memberSchema);
module.exports=members;
