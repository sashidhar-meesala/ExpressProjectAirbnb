const isAdmin = (req,res,next)=>{

    if(req.session.userInfo.isAdmin)
    {
        console.log("he is admin")
        next();    
    }

    else
    {
        res.render("general/login");
    }

}

module.exports = isAdmin;
