
// var db = require('../models');




console.log("yo");
$("#scrapeArticles").on("click", function(event){
  event.preventDefault();
  $.ajax({
    url: "/api/scrape",
    method: "GET"
  }).then((response) => {
    console.log(response);
    location.href = "/"
  })
})

$("#clearDb").on("click", function(event){
  console.log("Runnning bear")
  event.preventDefault();
   $.ajax({
     url: `/api/drop/collection`,
     method: "DELETE"
   }).then((response) => {
     console.log(response);
     location.href = "/"
   })
})

$(".container").on("click", ".save", function (event) {
  event.preventDefault();
  var id = $(this).attr("data-id")
  console.log(id);
  $.ajax({
    url: `/api/save/${id}`,
    method: "PUT"
  }).then((response) => {
    console.log(response);
  })
})

$(".container").on("click", ".unsave", function (event) {
  event.preventDefault();
  var id = $(this).attr("data-id")
  console.log(id);
  $.ajax({
    url: `/api/unsave/${id}`,
    method: "PUT"
  }).then((response) => {
    console.log(response);
  })
})
