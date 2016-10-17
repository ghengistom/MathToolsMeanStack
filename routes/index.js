var express = require('express');
//var MathTools = require('../MathTools.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/average', function(req, res, next){
  //get the data from the req object json array
  var numberArray = JSON.parse(req.body.numberArray);
  var average = 0;
  var total = 0;
//  console.log(numberArray + " ");

  for (var i = 0; i<numberArray.length; i++)
  {
    total += numberArray[i];
    console.log(numberArray[i] + "is the value at index" + i);
  }

  console.log("numberArray length is ->" + numberArray.length);
  console.log(numberArray.length + "is a lenght");
  console.log(total + "is the total");
  average = total / numberArray.length;
  console.log(average +"this is the average");

  res.json({ "average" : average });



});


router.post('/largenumber', function(req, res, next){
  var max = 0;
  var numberArray = JSON.parse(req.body.numberArray);

  for (var i = 0; i<numberArray.length; i++)
  {
    if (max < numberArray[i]){
      max = numberArray[i];
    }
  }
  res.json({ "max" : max });

});


router.post('/evennumber', function(req, res, next){
  var numberArray = JSON.parse(req.body.numberArray);
  var check = false;

  for (var i = 0; i<numberArray.length; i++)
  {
    if (numberArray[i] % 2 == 0)
      check = true;
  }
  res.json({ "containsEven" : check.toString()});
});


router.post('/alleven', function(req, res, next){
  var numberArray = JSON.parse(req.body.numberArray);
  var check = true;

  for (var i = 0; i<numberArray.length; i++)
  {
    if (numberArray[i] % 2 != 0)
      check = false;
  }

  res.json({ "isThereAnEvenNumber" : check.toString()});
});


router.post('/stringsearch', function(req, res, next){
   var stringArray = JSON.parse(req.body.stringArray);
   var stringCheck = JSON.parse(req.body.stringCheck);
   var check = false;

   for (var i = 0; i < stringArray.length; i++) {
     if (stringArray[i] === stringCheck)
       check = true;
   }

   res.json({ "result" : check });

});


router.post('/stringsearchtwice', function(req, res, next){
    var stringArray = JSON.parse(req.body.stringArray);
    var stringCheck = JSON.parse(req.body.stringCheck);
    var count = 0;
    var check = false;

    for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === stringCheck)
        count++;
    }

    if (count > 1)
      check = true;
    res.json({ "result" : check });

});


module.exports = router;
