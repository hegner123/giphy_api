// api key uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd
$(document).ready(function (){

  var topics = ['HORSE', 'CAT', 'DOG']

  makeButtons();
  addButton();
  setClick();

  function makeButtons(){
    for (i=0;i<topics.length;i++) {
      var newButton = $('<button class="btn gif-button ml-2" data-topic="">')
      newButton.attr("data-topic", topics[i] );
      newButton.text(topics[i]);
      newButton.appendTo(".button-div");
    }
    setClick();
  };

function addButton(){
  $('#add-button').on('click', function (){
    var userInput = $("#user-input").val()
    console.log(userInput);
    topics.push(userInput);
    $(".user-input-text").val("");
    $(".button-div").empty();
    makeButtons();
  });
};

function playPause(){
  $(".gif-img").on("click", function () {
      console.log($(this).attr("src"))
      console.log("click works")
    var movingIMG = $(this).attr("moving_img");
    var stillIMG = $(this).attr("still_img");
    var currentImg = $(this).attr("src")
    console.log(stillIMG);
    console.log(movingIMG);
    if (currentImg.endsWith("s.gif")) {
      $(this).attr("src", "" + movingIMG);
    } else {
      $(this).attr("src", "" + stillIMG);
    };
    });
};

// $("img").on("click", function () {
//   console.log($(this).attr("src"))
//   console.log("click works")
// var movingIMG = $(this).attr("moving_img");
// var stillIMG = $(this).attr("still_img");
// var currentImg = $(this).attr("src")
// console.log(stillIMG);
// console.log(movingIMG);
// if (currentImg.endsWith("s.gif")) {
//   $(this).attr("src", "" + movingIMG);
// } else {
//   $(this).attr("src", "" + stillIMG);
// };
// });
  

  function setClick(){
    $('.gif-button').click(function (){
      var searchTerm = $(this).attr("data-topic");
      var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd&q=' + searchTerm;
      $.ajax ({
        url:queryURL,
        method: 'GET',
      })
        .then(function(response){
          var results = response.data;
          $('.display').empty();
          for (i=0;i<20;i++){
            var imageImg = $('<img class="gif-img m-3">');
            imageImg.attr("src", results[i].images.fixed_height_still.url);
            imageImg.attr("still_img", results[i].images.fixed_height_still.url);
            imageImg.attr("moving_img", results[i].images.fixed_height.url);
            imageImg.prependTo('.display');
          };
          playPause();
        });
    });
  };


})