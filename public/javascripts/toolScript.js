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
    $.post("largenumber",
    {
        name: "Donald Duck"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$("#button3").click(function(){
    $.post("evennumber",
    {
        name: "Donald Duck"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$("#button4").click(function(){
    $.post("everynumbereven",
    {
        name: "Donald Duck"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
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
