# Node.js process.env 값 (express)



## 배포 모드  (production mode)

파일 캐싱, 에러메세지 감추기

```js
if(process.env.NODE_ENV == 'production'){
  console.log("it is production mode!");
}
```



## 개발 모드 (development mode)

파일 캐싱 방지, 디버깅을 위한 상세한 에러 메세지 보이기

```js
if(process.env.NODE_ENV == 'development'){
  console.log('it is development mode!!');
}
```

