const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

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
        imgURL:`/img/cover.jpg`,
        title:`titleeeewww`,
        price:100,
        rating:3
      });
      places.push(
        {
          imgURL:`/img/cover.jpg`,
          title:`titleeeewww`,
          price:100,
          rating:3
  
        });
        places.push(
          {
            imgURL:`/img/cover.jpg`,
            title:`titleeeewww`,
            price:100,
            rating:3
    
          });
        
          places.push(
            {
              imgURL:`/img/cover.jpg`,
              title:`titleeeewww`,
              price:100,
              rating:3
      
            });
        
            places.push(
              {
                imgURL:`/img/cover.jpg`,
                title:`titleeeewww`,
                price:100,
                rating:3
        
              });
        
              places.push(
                {
                  imgURL:`/img/cover.jpg`,
                  title:`titleeeewww`,
                  price:100,
                  rating:3
          
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
  })