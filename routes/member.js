var express = require('express');
const app = express();
var router = express.Router();

const Member = require('../schemas/memberSchema');

var debug = require('debug')('api:server');


app.use(express.json());

//const User = mongoose.model('User',userSchema);
/* GET users listing. */
router.get('/',(req, res)=> {
  Member.find({},function (err,user) {
    if(err) throw err;
    res.json(user)
  });
});

router.post('/',(req,res)=>{
  const member = new Member({
    name : req.body.name,
    year : req.body.year,
    designation : req.body.designation,
    image : req.body.image,
    linkedin : req.body.linkedin,
    git : req.body.git,
    fb : req.body.fb

  });
  const result= member.save();

  //res.writeHead(200,{'Content-Type':'text/plain'});
  res.json(member);
  debug(member);
});

module.exports = router;
