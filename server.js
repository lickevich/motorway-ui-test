'use strict';

const app = require('express')();
const images = require('./src/images.json');

const SERVER_TIMEOUT = 1000;

app.get('/images', ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images;

  // setTimeout(() => {
  //   return res.status(200).json(i);
  // }, SERVER_TIMEOUT);

  return res.status(200).json(i);
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});
