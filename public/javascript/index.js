
// var db = require('../models');




console.log("yo");
$("#scrapeArticles").on("click", function(event){
  event.preventDefault();
  $.ajax({
    url: "/api/scrape",
    method: "GET"
  }).then((response) => {
    console.log(response);
  })
})

$("#clearDb").on("click", function(event){
  console.log("Runnning bear")
  event.preventDefault();
  // db.Headline.drop()
})