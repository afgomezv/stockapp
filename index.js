require('dotenv').config();
const express = require('express');
const app = express();

//Setting
app.set('PORT', process.env.port || 5000);

//Route
app.get('/', (req, res) => {
  res.send('<h1>Hola mundo y deployment en Azure</h1>');
});

app.listen(app.get('PORT'), () => {
  console.log(`Server on port ${app.get('PORT')}`);
});
