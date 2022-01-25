var express = require('express');
var router = express.Router();
const FizzBuzzService = require('../service/fizzbuzz')

const fizzBuzzServ = new FizzBuzzService()
/* GET users listing. */
router.get('/getFizzBuzz', async function(req, res, next) {
  
  let result = await fizzBuzzServ.getFizzBuzz(req.query.count)
  console.log(new Date(), result)
  res.json(result);
});

module.exports = router;
