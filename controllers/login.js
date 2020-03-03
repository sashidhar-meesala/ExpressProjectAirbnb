var express = require('express')
var router = express.Router()

router.get('/login', function (req, res) {
    res.render("login",{
        title:"login",
        headingInfo:"login page lets get started",
    })
  })


  router.post("/loginvalidation",(req,res)=>{

    const errors= [];
    console.log(req.body);
    if(req.body.username =="")
    {

      errors.push("** You must enter a username!");

    }

    if(req.body.password=="")
    {
      errors.push("** Youmust enter a  password!")
    }


    if(errors.length > 0)
    {
      res.render("login",{
        messages : errors
      })
    }
    else{
      res.render("dashboard")
    }
  })


module.exports=router;