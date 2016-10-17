$("#button1").click(function(){

    var problemOneInput = $("#average").val();

    $.post("average",
    {
        numberArray: problemOneInput
    },
    function(data, status){
        $("#problemOne").append('<p>Average is: ' + data.average);
    });
});

$("#button2").click(function(){

    var problemTwoInput = $("#max").val();

    $.post("largenumber",
    {
        numberArray: problemTwoInput
    },
    function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        $("#problemTwo").append('<p>Largest number is: ' + data.max);
    });
});

$("#button3").click(function(){

    // get array input
    var problemThreeInput = $("#evenNumber").val();

    $.post("evennumber",
    {
      numberArray: problemThreeInput
    },
    function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        $("#problemThree").append('<p>Contains even number: ' + data.containsEven);
    });
});

$("#button4").click(function(){
    var problemFourInput = $("#everyNumberEven").val();
    $.post("alleven",
    {
        numberArray: problemFourInput
    },
    function(data, status){
          $("#problemFour").append('<p>They are all even: ' + data.isThereAnEvenNumber);
    });
});


$("#button5").click(function(){
    $.post("arrayinstring",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$("#button6").click(function(){
    $.post("arrayinstringtwice",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
