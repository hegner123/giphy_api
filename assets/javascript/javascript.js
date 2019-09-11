// api key uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd
$(document).ready(function (){
  
clickStuff();

  $('#add-button').on('click', function (){
    var userInput = $("#user-input").val()
    console.log(userInput);
    var newButton = $('<button class="btn gif-button ml-2" data-topic="">')
    newButton.attr("data-topic", userInput );
    newButton.text(userInput);
    newButton.appendTo(".button-div");
    clickStuff();
    $(".user-input-text").val("");
  });

  

  function clickStuff(){
    $('.gif-button').click(function (){
      console.log("this");
      var searchTerm = $(this).attr("data-topic");
      var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd';
      $.ajax ({
        url:queryURL,
        method: 'GET',
      })
        .then(function(response){
          var results = response.data;
          $('.display').empty();
          for (i=0;i<20;i++){
            var imageDiv = $('<div class="ml-3">')
            var imageImg = $('<img src="">')
            imageImg.attr("src", results[i].images.fixed_height.url)
            imageDiv.appendTo('.display');
            imageImg.appendTo(imageDiv);
    
          }
        })
    });
  };





})