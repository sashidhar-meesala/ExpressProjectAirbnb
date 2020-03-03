var express = require('express')
var router = express.Router()
router.get('/explore', function (req, res) {              
    res.render("explore",{
      title:"List of properties",
        headingInfo:"Properties ready to rent",
        room : model.getallListingRoom()
    })
  })
  

module.exports=router;