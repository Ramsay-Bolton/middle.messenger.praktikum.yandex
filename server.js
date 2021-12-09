const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './dist' })
});
app.get('/registration', (req, res) => {
    res.sendFile('registration.html', { root: './dist' })
});
app.get('/404', (req, res) => {
    res.sendFile('404.html', { root: './dist' })
});
app.get('/500', (req, res) => {
    res.sendFile('500.html', { root: './dist' })
});
app.get('/profile', (req, res) => {
    res.sendFile('profile.html', { root: './dist' })
});
app.get('/chat', (req, res) => {
    res.sendFile('404.html', { root: './dist' })
});
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './dist' })
});


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 