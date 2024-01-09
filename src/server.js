const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Nếu PORT không được đặt, sử dụng giá trị mặc định 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/abc', (req, res) => {
  res.send('Kiểm tra Hello World!');
});

app.get('/views', (req, res) => {
  res.render('sample.ejs');
});

app.listen(port, () => {
  console.log(`App mẫu đang lắng nghe trên cổng ${port}`);
});
