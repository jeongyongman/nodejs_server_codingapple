const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`========== express 서버시작 ==========\nlistening on port ${port}`)
});

app.get('/pet', function (req, res) {
  // res.send('펫용품 쇼핑할 수 있는 페이지입니다.')
  res.status(200);
  res.redirect('https://shopping.naver.com/window/main/pet-group?unionCategory=DOG')
});

app.get('/beauty', function (req, res) {
  // res.send('뷰티용품 쇼핑할 수 있는 페이지입니다.')
  res.status(200);
  res.redirect('https://shopping.naver.com/beauty/home')
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
  // res.status(200);
  // res.redirect('https://shopping.naver.com/window/main/pet-group?unionCategory=DOG')
});
// app.get('/sound/:name', function (req, res) {
//   // const p = req.params
//   // console.log(p.name)
//   const { name } = req.params
//   if (name == "dog") {
//     res.json({'sound' : '멍멍'})
//   } else if (name == "cat") {
//     res.json({'sound' : '야옹'})
//   } else if (name == "pig") {
//     res.json({'sound' : '꿀꿀'})
//   } else {
//     res.json({'sound' : '지정되지 않았음'})

//   }
  
// })