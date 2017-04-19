module.exports = (router, User) => {
   
    
    router.get('/', function(req,res){
        res.render('index', {
            title : "Park"
        });
    })

    router.post('/dbIn', function(req,res){
        var user = new User({
            name : req.body.user_name,
            age : req.body.user_age,
            school : req.body.user_school,
            friend : req.body.user_friend
        }); 

        user.save(function(err){
           if(err){
                console.err(err);
           }else{
               res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
               res.end('Name : ' + req.body.user_name + '\n age : ' + req.body.user_age + '\nschool : ' + req.body.user_school + '\nfriend : ' + req.body.user_friend)
           }
          
        });
    })
return router;
}
