$.getJSON('mydata.json', function(data){
    myData = data;
    for (var i = 0; i < myData.length; i++){
        $('#content_test').append(myData[i].test + "<br />");
    }
});