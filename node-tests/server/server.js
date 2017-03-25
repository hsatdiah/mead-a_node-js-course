const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Dummy App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    { id: 1, name: 'Miraya', email: 'admin@express.to', },
    { id: 2, name: 'Hatsune', email: 'hatsune@banana.mo', },
    { id: 3, name: 'PepeTheFrog', email: 'pepe@nuts.pe', },
  ]);
});

app.listen(3000);

module.exports.app = app;
