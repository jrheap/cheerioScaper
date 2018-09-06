var scrapeCtrl = require('../controllers/scrape');
var db = require("../models")
console.log(scrapeCtrl);

module.exports = function(app){
  app.get("/api/scrape", scrapeCtrl.scrape)

  app.put("/api/save/:id", function(req, res){
    console.log(req.params.id);
    var id = req.params.id
    db.Headline.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: {
         saved: true
      }
    }).then((dbResponse) => {
      console.log(dbResponse);
      res.end()
    })

  })
    app.put("/api/unsave/:id", function (req, res) {
      console.log(req.params.id);
      var id = req.params.id
      db.Headline.findOneAndUpdate({
        _id: req.params.id
      }, {
        $set: {
          saved: false
        }
      }).then((dbResponse) => {
        console.log(dbResponse);
        res.end()
      })

    })
  app.delete("/api/drop/collection", (req, res) => {
    db.Headline.remove({}).then((response) => {
      console.log(response);
      res.json(response)
    })
  })
}