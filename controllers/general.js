var express = require('express')
var router = express.Router()
const model = require("../models/room");
router.get('/', function (req, res) {
    res.render("homepage",{
        title:"Home",
        headingInfo:"HOMEPAGE",
        randomContent:"bkjsbjbsajf",
        room : model.getallFeaturedRooms()
    })
  })


  router.get("/dashboard",(req,res)=>{

    res.render("dashboard",{
        title: "Dashboard Page",
        headingInfo : "Dashboard Page"
  
    });
  
  
  });
module.exports=router;