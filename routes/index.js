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
  var even = 1;
  var numberArray = JSON.parse(req.body.numberArray);


  for (var i = 0; i<numberArray.length; i++)
  {

    if (numberArray[i] % 2 == 0)
    {
      console.log("true");
      return true;
    }
    else
    {
      console.log("false");
      return false;
    }

  }


});


router.post('/alleven', function(req, res, next){
  //get the data from the req object json array
  //call the function called average which is located in
  //antoher file and pass the data into as a parameter
  //get the return value form the function
  //return the value which is the JSON object, to the user via the res
  //object
  //do this for all 6 functions


});


router.post('/stringsearch', function(req, res, next){
  //get the data from the req object json array
  //call the function called average which is located in
  //antoher file and pass the data into as a parameter
  //get the return value form the function
  //return the value which is the JSON object, to the user via the res
  //object
  //do this for all 6 functions


});


router.post('/stringsearchtwice', function(req, res, next){
  //get the data from the req object json array
  //call the function called average which is located in
  //antoher file and pass the data into as a parameter
  //get the return value form the function
  //return the value which is the JSON object, to the user via the res
  //object
  //do this for all 6 functions


});



module.exports = router;
