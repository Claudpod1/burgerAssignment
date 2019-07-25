var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/index");

});

router.get("/index", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/', function (req, res) {
    burger.insertBurger(
        ['burger_name'],
        [req.body.burger_name],
        function (data) {
            res.redirect('/')
     });
});


module.exports = router; 
