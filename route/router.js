const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Full Name")
  });

router.get("/fname/:name", (req, res) => {
  console.warn(req.params.name);
  res.render("fname.ejs",{
      fname:req.params.name
  });
});
router.get("/lname", (req, res) => {
  res.render("lname.ejs",{
      lname:"Dewangan"
  })
});

module.exports = router;