
$(document).ready(function () {

  let topics = ['GUITAR', 'DRUMS', 'SINGING']

  makeButtons();
  addButton();

  function makeButtons() {
    for (i = 0; i < topics.length; i++) {
      let newButton = $('<button class="btn gif-button ml-2" data-topic="">')
      newButton.attr("data-topic", topics[i]);
      newButton.text(topics[i]);
      newButton.appendTo(".button-div");
    };
    setClick();
  };

  function addButton() {
    $('#add-button').on('click', function () {
      let userInput = $("#user-input-text").val();
      if (!userInput) {
        $('.display').empty();
        let newDiv = $("<div>");
        newDiv.addClass("error-text");
        newDiv.text("No Input error:13-p{}njd`~ç√˙∆:/7 Please input some text and try again.");
        newDiv.appendTo(".display");
      } else {
        $(".error-text").empty();
        console.log(userInput);
        topics.push(userInput);
        $(".user-input-text").val("");
        $(".button-div").empty();
        makeButtons();
      };
    });
  };

  function playPause() {
    $(".gif-img").on("click", function () {
      console.log($(this).attr("src"));
      console.log("click works");
      let movingIMG = $(this).attr("moving_img");
      let stillIMG = $(this).attr("still_img");
      let currentImg = $(this).attr("src");
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
      let searchTerm = $(this).attr("data-topic");
      let searchLimit = $("#user-input-number").val();
      let searchRating = $("#user-rating-select").val();
      let queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd&q=' + searchTerm + '&limit=' + searchLimit + '&rating=' + searchRating;
      $.ajax({
          url: queryURL,
          method: 'GET',
        })
        .then(function (response) {
          let results = response.data;
          console.log(response);
          $('.display').empty();
          for (i = 0; i < searchLimit; i++) {
            let imageDiv = $('<div class="gif-div col text-center image-div mx-1">');
            imageDiv.appendTo(".display");
            let imageImg = $('<img class="gif-img m-3">');
            imageImg.attr("src", results[i].images.fixed_height_still.url);
            imageImg.attr("still_img", results[i].images.fixed_height_still.url);
            imageImg.attr("moving_img", results[i].images.fixed_height.url);
            imageImg.appendTo(imageDiv);
            let imageText = $('<div class="rating-text">');
            imageText.text('Rating: ' + results[i].rating.toUpperCase());
            imageText.appendTo(imageDiv);
          };
          playPause();
        });
    });
  };






});