var express = require('express')
var router = express.Router()
//const model = require("../models/room");
const userModel = require("../models/user");
const roomModel=require("../models/rooms");
const path = require("path");


//HOMEPAGE

router.get('/', function (req, res) {
  roomModel.find({isFeatured:true})
  .then((rooms)=>{
      const filteredRoom =   rooms.map(room=>{

              return {
                  title:room.title,
                  description:room.description,
                  price:room.price,
                  location:room.location,
                  isFeatured:room.isFeatured,
                  pic:room.pic
                  
              }
      });

      console.log(filteredRoom);

      res.render("homepage",{
         data : filteredRoom
         
      });

  })
  .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
  })



//DASHBOARD

  router.get("/dashboard",(req,res)=>{

    res.render("dashboard",{
        title: "Dashboard Page",
        headingInfo : "Dashboard Page"
  
    });
  
  
  });


//ADMIN

  router.get('/addroom', function (req, res) {
    res.render("addroom",{
        title:"admin",
        
    })
  })

  router.post("/addroombyAdmin",(req,res)=>{

      const newRoom = 
    {
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        location:req.body.location,
        isFeatured:req.body.yesno,
        

    }
    console.log(newRoom)
    const room = new roomModel(newRoom);
    room.save()
    .then((room)=>{

      req.files.picture.name = `room_pic_${room._id}${path.parse(req.files.picture.name).ext}`;

      req.files.picture.mv(`public/uploads/${req.files.picture.name}`)
      .then(()=>{


        roomModel.updateOne({_id:room._id},{
              pic: req.files.picture.name
          })
          .then(()=>{
              res.redirect('/getrooms')
          })

      })
         
    })
    .catch(err=>console.log(`Error while inserting into the data ${err}`));



     
  
  }) 
    /*.then((room)=>{
    req.files.picture.name = `pro_pic_${room._id}${path.parse(req.files.picture.name).ext}`;
    req.files.picture.mv(`public/uploads/${req.files.picture.name}`)
    .then(()=>{
      roomModel.updateOne({_id:room._id},{
          pic: req.files.picture.name
          
      })
    console.log("room created");
   
  })
  .catch(err=>console.log(`error while inserting : ${err}`));
  }) })*/


  router.get('/getrooms', (req, res)=> {

        roomModel.find()
        .then((rooms)=>{
    
    
            //Filter out the information that you want from the array of documents that was returned into
            //a new array
    
            //Array 300 documents meaning that the array has 300 elements 
    
      
            const filteredRoom =   rooms.map(room=>{
    
                    return {
                        title:room.title,
                        description:room.description,
                        price:room.price,
                        location:room.location,
                        isFeatured:room.isFeatured,
                        pic:room.pic
                        
                    }
            });
    
            console.log('rooms'+filteredRoom);
    
            res.render("viewrooms",{
               data : filteredRoom,
                         
            });
    
        })
        .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
    
        
        
    })




  //LOGIN

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
      userModel.find({ email: req.body.username},function (err, result) {

        if (err) throw err;
        console.log(result);
        
      });

    }
  })


//REGISTER

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

  //insert into database
  const newUser = 
  {
      firstName:req.body.fname,
      lastName:req.body.lname,
      email:req.body.email,
      password:req.body.pwd,
      phone:req.body.phone
  }

  const user = new userModel(newUser);
  user.save()
  .then(()=>{
   res.redirect("dashboard");
  })
  .catch(err=>console.log(`error while inserting : ${err}`));
  
  /*const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: `${req.body.email}`,
  from: 'sashidharklu@gmail.com',
  subject: 'WELCOME TO AIRBNB',
  text: 'We are happy to have you with us',
  html: '<strong>thanks for the registering with us . we will unlock the world of offers and coupons exclusively for you thank you!</strong>',
};
sgMail.send(msg);
console.log(msg);
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
      .create({
         body: `welcome ${req.body.fname} ${req.body.lname} to airbnb we are happy to have you!!  please check your Email :${req.body.email}`,
         from: '+18474160457',
         to: `${req.body.phone}`
       })
      .then(messages => {
        console.log(messages.sid);
        res.render("dashboard",{
          title:"List of properties",
            headingInfo:"Properties ready to rent",
            room : model.getallListingRoom()
        })
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })*/
}


  })



//EXPLORE
  //const model = require("../models/room");
router.get('/explore', function (req, res) {      
  roomModel.find()
  .then((rooms)=>{
      const filteredRoom =   rooms.map(room=>{

              return {
                  title:room.title,
                  description:room.description,
                  price:room.price,
                  location:room.location,
                  isFeatured:room.rating,
                  pic:room.pic
                  
              }
      });

      console.log(filteredRoom);

      res.render("explore",{
         data : filteredRoom
         
      });

  })
  .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
  

  })



module.exports=router;