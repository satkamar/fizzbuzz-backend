var express = require('express');
var router = express.Router();
const FizzBuzzService = require('../service/fizzbuzz')

const fizzBuzzServ = new FizzBuzzService()
/* GET users listing. */
router.get('/getFizzBuzz', async function(req, res, next) {
  
  try {
    let result = await fizzBuzzServ.getFizzBuzz(req.query.count)
    res.json(result);
  } catch (error) {
    let statusCode = 500
    if(error.status) statusCode = error.status
    res.status(statusCode).send(error);
  }
  
});

module.exports = router;
