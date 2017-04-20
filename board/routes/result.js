module.exports = (router, User) => {
    
    router.get('/result',function(req,res){
        res.send('Name :' + req.body.user_name )
    });
return router;
}