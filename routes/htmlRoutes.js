var db = require('../models');
module.exports = function (app) {
  app.get("/", function(req, res){
    db.Headline.find({}).then(function(response){
      console.log(response);
      res.render("home", {
        articles: response
      })
    })

  })
  app.get("/saved", function (req, res) {
    db.Headline.find({saved: true}).then((response) => {
      console.log(response);
      res.render("saved", {articles:response})
    })
  })
}