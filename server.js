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
    res.render("Login")
  })


  app.get('/roomlist', function (req, res) {
    res.render("roomlist")
  })


  const PORT =3000;
  app.listen(3000,()=>{
      console.log("webserver connected");
  })