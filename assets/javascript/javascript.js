// api key uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd
$(document).ready(function () {

  var topics = ['GUITAR', 'DRUMS', 'SINGING']

  makeButtons();
  addButton();
  setClick();

  function makeButtons() {
    for (i = 0; i < topics.length; i++) {
      var newButton = $('<button class="btn gif-button ml-2" data-topic="">')
      newButton.attr("data-topic", topics[i]);
      newButton.text(topics[i]);
      newButton.appendTo(".button-div");
    }
    setClick();
    
  };

  function addButton() {
    $('#add-button').on('click', function () {
      var userInput = $("#user-input-text").val()
      if (!userInput) {
        $('.display').empty();
        var newDiv = $("<div>");
        newDiv.addClass("error-text");
        newDiv.text("No Input error:13-p{}njd`~ç√˙∆:/7 Please input some text and try again.");
        newDiv.appendTo(".display");
      }else {
        $(".error-text").empty();
        console.log(userInput);
        topics.push(userInput);
        $(".user-input-text").val("");
        $(".button-div").empty();
        makeButtons();
      }
      
    });
  };

  function playPause() {
    $(".gif-img").on("click", function () {
      console.log($(this).attr("src"))
      console.log("click works")
      var movingIMG = $(this).attr("moving_img");
      var stillIMG = $(this).attr("still_img");
      var currentImg = $(this).attr("src")


      if (currentImg.endsWith("s.gif")) {
        $(this).attr("src", "" + movingIMG);
        console.log("movingIMG");
      } else {
        $(this).attr("src", "" + stillIMG);
        console.log("stillIMG");
      };
    });
  };


  function setClick() {
    $('.gif-button').click(function () {
      var searchTerm = $(this).attr("data-topic");
      var searchLimit = $("#user-input-number").val();
      var searchRating = $("#user-rating-select").val();
      var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd&q=' + searchTerm + '&limit=' + searchLimit + '&rating=' + searchRating;
      $.ajax({
          url: queryURL,
          method: 'GET',
        })
        .then(function (response) {
          var results = response.data;
          console.log(response);
          
          $('.display').empty();
          for (i = 0; i < searchLimit; i++) {
            var imageDiv = $('<div class="gif-div col text-center image-div mx-1">')
            imageDiv.appendTo(".display")
            var imageImg = $('<img class="gif-img m-3">');
            imageImg.attr("src", results[i].images.fixed_height_still.url);
            imageImg.attr("still_img", results[i].images.fixed_height_still.url);
            imageImg.attr("moving_img", results[i].images.fixed_height.url);
            imageImg.appendTo(imageDiv);
            var imageText = $('<div class="rating-text">');
            imageText.text('Rating: ' + results[i].rating.toUpperCase());
            imageText.appendTo(imageDiv);
          };
          playPause();
        });
    });
  };


  
  


})