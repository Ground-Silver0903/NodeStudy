module.exports = (router) => {

    router.post('/test', function(req,res){
        res.send('Name : ' + req.body.user_name);
        console.log('Name : ' + req.body.user_name);
    })
    return router;
}