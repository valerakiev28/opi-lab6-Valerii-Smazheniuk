const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('OPI ЛР6 Todo App v1.0');
});
app.listen(3000, () => {
  console.log('Todo app on 3000');
});
