var express = require('express');
var User = require('../schemas/user')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find({})
    .then((user) => {
      res.json(users)
    })
    .catch((err) => {
      res.json(users)
    })
});

router.post('/', (req, res, next) => {
  console.log(req.body.name)
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
  user.save().then((result) => {
    console.log(result)
    res.status(201).json(result)
  })
    .catch((err) => {
      console.error(err)
      next(err)
    })
})

module.exports = router;
