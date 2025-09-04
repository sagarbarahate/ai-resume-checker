let express = require("express");
let routes = express.Router();

routes.get("/",function(req,res){
    res.render("admin/home.ejs");
});

module.exports = routes;