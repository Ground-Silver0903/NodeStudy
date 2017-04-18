module.exports = (router) => {

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
        var user = new User();
        user.name = req.body.name,
        user.age = req.body.age,
        user.school = req.body.school,
        user.friend = req.body.friend;

        user.save(function(err){
            if(err){
                console.error('err');
            }
        });
    })
return router;
}