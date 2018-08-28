var scrapeCtrl = require('../controllers/scrape');
console.log(scrapeCtrl);

module.exports = function(app){
  app.get("/api/scrape", scrapeCtrl.scrape)
}