var express = require("express");
const app = express();
var router = express.Router();

app.listen(3000);

/* GET home page. */
router.get("/", function (req, res) {
  res.send("Hi");
  res.render("index", { title: "Express" });
});

module.exports = router;
