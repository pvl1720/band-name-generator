'use strict';

$(function(){

  $("#name").on('click', function() {
  $.get("http://localhost:3000/adjective", function(response){
    var adjective = response.word;
    $("#adjective").text(adjective);
    } )
  });
});

