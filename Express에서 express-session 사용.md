

# Express에서 express-session 사용

1. 적용하기

   ```js
   var session = require('express-session');

   app.use(session({
     secret : '1203!@()#',
     resave : false,
     saveUninitialized : true
   }));
   ```

   secret : 쿠키 임의 방지를 막기 위한것. 이것을 통해 세션을 암호화함.

   resave : 세션을 언제나 저장할 지 결정

   saveUninitialized : 세션이 저장되기 전에 Uninitialized 상태로 미리 만들어서 저장함.

2. 세션 초기 설정

   ```js
   app.get('/',function(req,res){
     sess = req.session;
   });
   ```

3. 세션 변수 설정

   ```Js
   app.get('/login', function(req,res){
     sess = req.session;
     sess.username = 'jieun',
   })
   ```

   **sess.[키이름]  =  값**으로 세션 변수 추가 가능

4. 세션 변수 사용하기

   ```js
   app.get('/', function(req,res){
     sess = req.session;
     console.log('sess.username');
   });
   ```

5. 세션 제거

   ```Js
   req.session.destroy(function(err){
     
   })
   ```

   ​