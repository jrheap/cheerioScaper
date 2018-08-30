var cheerio = require("cheerio");
var request = require('request');
var db = require('../models');

module.exports = {
  scrape: function(req, res){
    request("https://www.nytimes.com/", function (err, response, html) {

      if (err) {

        console.log(err);
      }
      var $ = cheerio.load(html);
      var results = [];
      
      $("div.css-6p6lnl").each(function (i, element) {

        var headline = $(element).text();
        var summary = $(element).find("p").text();
        var url = $(element).children().attr("href");

        var results = {
          headline: headline,
          url,
          summary
        };
        db.Headline.create(results).then(function (response) {
          console.log(response);
        })
      });
      console.log("+++++++++++++++++++");
      res.json(results);
    });

  }
}
