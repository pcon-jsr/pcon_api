const mongoose=require('mongoose');

const noticeSchema = new mongoose.Schema({
  head : String,
  body : String,
  from :String,
  to :String,
  time : {type:Date, default:Date.now}
});


const notices= mongoose.model('Notice',noticeSchema);
module.exports=notices;
