module.exports = (router, User) => {

// router.get('/', function(req,res){
//     res.render('index', {
//         title: "Park"
//     });
// })

// router.post('/name', function(req,res){
//     res.send('Name : ' + req.body.user_name + ' age: ' + req.body.user_age);
    
    
    router.get('/', function(req,res){
        res.render('index', {
            title : "Park"
        });
    })

    router.post('/dbIn', function(req,res){
        var user = new User({
            name : req.body.name,
            age : req.body.age,
            school : req.body.school,
            friend : req.body.friend
        }); 

        user.save(function(err){
           if(err){
                console.err(err);
           }else{
               res.end('Name : ' + req.body.name + '\n age : ' + req.body.age + 'school : ' + req.body.school + 'friend : ' + req.body.friend)
           }
           
          
        });
    })
return router;
}
