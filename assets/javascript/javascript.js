// api key uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd
$(document).ready(function (){

  var topics = ['HORSE', 'CAT', 'DOG']

  function makeButtons(){
    for (i=0;i<topics.length;i++) {
      var newButton = $('<button class="btn gif-button ml-2" data-topic="">')
      newButton.attr("data-topic", topics[i] );
      newButton.text(topics[i]);
      newButton.appendTo(".button-div");
      setClick();
    }
  }

  $('#add-button').on('click', function (){
    var userInput = $("#user-input").val()
    
    console.log(userInput);
    topics.push(userInput);
    $(".user-input-text").val("");
    $(".button-div").empty();
    makeButtons();
  });

  

makeButtons();
setClick();


  
  

  function setClick(){
    $('.gif-button').click(function (){
      var searchTerm = $(this).attr("data-topic");
      // var queryURL = 'https://api.giphy.com/v1/gifs/search?&api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYdq='+ searchTerm;
      var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd&q=' + searchTerm;
      $.ajax ({
        url:queryURL,
        method: 'GET',
      })
        .then(function(response){
          console.log(response);
          var results = response.data;
          $('.display').empty();
          for (i=0;i<20;i++){
            var imageDiv = $('<div class="m-3">')
            var imageImg = $('<img class="gif-img gif-img-' + [i] + ' " src="">')
            imageImg.attr("src", results[i].images.fixed_height.url)
            imageImg.css('animation-play-state', 'paused')
            imageDiv.appendTo('.display');
            imageImg.appendTo(imageDiv);
    
          }
        })
    });
  };


  function pausedPlay(){
    $(".gif-img").on("click", function(){
      if ($(this).css("animation-play-state", "paused")) {
        
      }
      
    })
  }





})