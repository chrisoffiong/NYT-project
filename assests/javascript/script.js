var authKey = "06d4de39f3d243a4a89b3855d1fdf8e1";
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q=";
var articleCounter = 0

$(".btn-light").on("click", function() {
    $.ajax({
        url: queryURLBase ,
        method: 'GET',
      }).then(function(response) {
        console.log(response);
      }).catch(function(err) {
        
      });
})
$(".btn-primary").on("click", function(){
    
})


