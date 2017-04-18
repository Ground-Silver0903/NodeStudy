module.exports = (router, User) => {

router.post('/insertInfo', function(req,res){
    var user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.school = req.body.school;

    user.save(function(err){
        if(err){
            console.error(err);
            res.json({result : 0});
            return;
        }
        res.json({result : 1});
       
    });
})

.get('/getInfo', function(req,res){
    User.find(function(err, user){
        if(err) return res.status(500).send({error : 'data not found'})
        res.json(user);
    })
})

.get('/getInfobyName/:name', function(req,res){
    User.findOne({ name : req.params.name}, function(err, user){
        if(err) return res.status(500).json({error : err});
        if(!user) return res.status(404).json({error : 'user not found'});
        res.json(user);
    })
})

.get('/getInfoByAge/:age', function(req,res){
    User.findOne({ age : req.params.age }, function(err, user){
        if(err) return res.status(500).json({error : err});
        if(!user) return res.status(404).json({error : 'user not found'});
        res.json(user);
    })
})

.put('/updateInfo/:name', function(req,res){
    User.update({ name : req.params.name}, {$set : req.body}, function(err, output){
        if(err) res.status(500).json({error : 'database failure'});
        console.log(output);
        if(!output.n) return res.status(404).json({error : "user not found"});
        res.json({message : "user updated"});
    });
})

.delete('/deleteInfo/:name', function(req,res){
    User.remove({ name : req.params.name }, function(err, output){
        if(err) return res.status(500).json({ error : "database failure"});

        res.json({message : 'delete success'});
    })
})

.get('/first', function(req,res){
    User.find({name : req.params.name}, function(err, output){
        if(err) return res.status(500).json({error : "database failure"});

        res.render('first',{
            name : req.params.name
        })
    });
});
    return router;
}