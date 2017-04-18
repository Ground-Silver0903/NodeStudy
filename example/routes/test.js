module.exports = (router) => {

    // router.get('/', function(req,res){
    //     res.render('test.ejs');
    // });

    router.post('/test', function(req,res){
        res.send('Name : ' + req.body.user_name);
        console.log('Name : ' + req.body.user_name);
    })
    return router;
}