var express = require('express')
var router = express.Router()

router.get('/register', function (req, res) {
    res.render("register",{
      title:"User Registration",
        headingInfo:"register now",
    })
  })

  router.post("/register_validation",(req,res)=>{

    const reg_errors= [];
    let alpha = /^[a-zA-Z]+$/;
    let email_test = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    let pwd_test= new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    console.log(req.body);
    if(req.body.email == "")
    {

      reg_errors.push("** You must enter a valid email!");

    }

    if(req.body.email !="" && email_test.test(req.body.email)==false){
      reg_errors.push("** Please enter a valid email")
    }

    if(req.body.fname == "")
    {
      reg_errors.push("** You must enter your first name!")
    }

    if(req.body.fname !="" && alpha.test(req.body.fname)==false){
      reg_errors.push("** first name can contain only aplhabets")
    }

    if(req.body.lname == "")
    {
      reg_errors.push("** You must enter your last name!")
    }

    if(req.body.lname !="" && alpha.test(req.body.lname)==false){
      reg_errors.push("** last name can contain only aplhabets")
    }

    if(req.body.pwd=="")
    {
      reg_errors.push("** Hey You must enter your password!")
    }

    if(req.body.pwd != "" && pwd_test.test(req.body.pwd)==false){
      reg_errors.push("** Password should contain be length of 8 , must contain at least 1 lowercase & 1 uppercase alphabetical character, 1 numeric and special character.")
    }
    
    if(reg_errors.length > 0 )
  {
  res.render("register",{
      messages:reg_errors
  })
}
else {
  
    const accountSid = 'AC19666a3f4f178276f2a3c9fc67f0fe0b';
    const authToken = '0217545a87c2ca07fd1c4acc793fbb20';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
      .create({
         body: `welcome ${req.body.fname} ${req.body.lname} please check your Email :${req.body.email}`,
         from: '+18474160457',
         to: `${req.body.phone}`
       })
      .then(messages => {
        console.log(messages.sid);
        res.render("explore",{
          title:"List of properties",
            headingInfo:"Properties ready to rent",
            room : model.getallListingRoom()
        })
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })
}


  })

module.exports=router;



  