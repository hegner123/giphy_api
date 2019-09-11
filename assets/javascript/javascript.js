// api key uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd




$(document).ready(function (){

$('.gif-button').on('click',function (){
  var queryURL = 'https://api.giphy.com/v1/gifs/search?q=pandas&api_key=uAqq2e9vPXAPuNoT7BAQMESLv2UA1RYd';
  $.ajax ({
    url:queryURL,
    method: 'GET',
  })
    .then(function(response){
      var results = response.data;
      for (i=0;i<20;i++){
        var imageDiv = $('<div class="ml-3">')
        var imageImg = $('<img src="">')
        imageImg.attr("src", results[i].images.fixed_height.url)
        imageDiv.appendTo('.display');
        imageImg.appendTo(imageDiv);

      }
    })
})

// $("#search-btn").on("click", function (){
  
//   var searchTerm = $("#search-term").val();
//   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=AFlvZG0WQAGK0M8a8zXNmxv8ZkCfp7fq";
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   })
//       .then(function(response) {
//         var results = response.response.docs;
        
        
//         for(i= 0 ;i<results.length;i++){
//           var br = $("<br>");
//           var article = $("<div>").addClass("article" + [i])
//           article.text(results[i].snippet);
//           article.prependTo(".articles");
//           br.prependTo(".articles");

//           searchTerm= "";
//         }
      
//       })
// })





})