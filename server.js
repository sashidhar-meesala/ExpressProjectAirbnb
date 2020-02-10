const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.render("homepage",{
        title:"Home",
        headingInfo:"HOMEPAGE",
        randomContent:"bkjsbjbsajf"
    })
  })

  app.get('/login', function (req, res) {
    res.render("login",{
        title:"login",
        headingInfo:"login page lets get started",
    })
  })


  app.post("/loginvalidation",(req,res)=>{

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
  })


  app.post("/register_validation",(req,res)=>{

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
      reg_errors.push("** You must enter your password!")
    }

    if(req.body.pwd != "" && pwd_test.test(req.body.pwd)==false){
      reg_errors.push("** Password should contain be length of 8 , must contain at least 1 lowercase & 1 uppercase alphabetical character, 1 numeric and special character.")
    }
    




    if(reg_errors.length > 0)
    {
      res.render("register",{
        messages : reg_errors
      })
    }
  })




  app.get('/register', function (req, res) {
    res.render("register",{
      title:"User Registration",
        headingInfo:"register now",
    })
  })

  app.get('/explore', function (req, res) {
    const places=[];
    places.push(
      {
        imgURL:`/img/room1.jpg`,
        title:`ENTIRE VILLA. 2 BEDS | Modern Branyan Guest Villa`,
        price:100,
        rating:5
      });
      places.push(
        {
          imgURL:`/img/room2.jpg`,
          title:`ENTIRE HOUSE · 8 BEDS | Spacious Coastal Retreat`,
          price:120,
          rating:4.1
  
        });
        places.push(
          {
            imgURL:`/img/room3.jpg`,
            title:`ENTIRE BUNGALOW · 3 BEDS | Point Boston Beach House`,
            price:200,
            rating:5
    
          });
        
          places.push(
            {
              imgURL:`/img/room4.jpg`,
              title:`ENTIRE BUNGALOW · 4 BEDS | Beach Front Holiday Home `,
              price:140,
              rating:4.5
      
            });
        
            places.push(
              {
                imgURL:`/img/room5.jpg`,
                title:`ENTIRE APARTMENT · 2 BEDS | The Loft - Crackenback`,
                price:1270,
                rating:4.4
        
              });
        
              places.push(
                {
                  imgURL:`/img/room6.jpg`,
                  title:`ENTIRE APARTMENT · 4 BEDS |The Beach Apartment `,
                  price:190,
                  rating:4.3
          
                });
                
    res.render("explore",{
      title:"List of properties",
        headingInfo:"Properties ready to rent",
        rooms:places
    })
  })



  const PORT =3000;
  app.listen(3000,()=>{
      console.log("webserver connected");
  });