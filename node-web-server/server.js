const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Miraya',
    likes: [
      'anime',
      'manga',
      'front-end',
      'math'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page :3');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
