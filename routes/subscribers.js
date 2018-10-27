var express = require('express');
const Subscriber = require('../schemas/subscriberSchema');
const app = express();
var router = express.Router();

var debug = require('debug')('api:server');


app.use(express.json());

/* GET users listing. */
router.get('/',(req, res)=> {
  Subscriber.find({},function (err,subscriber) {
    if(err) throw err;
    res.json(subscriber)
  });
});

router.post('/',(req,res)=>{
  const subscriber = new Subscriber({
    email : req.body.email
  });
  Subscriber.find({'email':req.body.email},function (err,sub) {
    if(err)
    throw(err);
    else {
      if(sub.length==0)
      {
        const result= subscriber.save();
        //res.writeHead(200,{'Content-Type':'text/plain'});
        res.json(subscriber);
        debug(subscriber);
      }
      else {
        debug("fail");
        res.status(400).send('Request failed');
      }

    }
  });
});

module.exports = router;
