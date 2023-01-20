const express = require('express');
var fallback = require('express-history-api-fallback');
const path = require('path');

const dirPath = path.join(__dirname, '../', 'dist');

const app = express();
const PORT = 3000;

app.use(express.static(dirPath));
app.use(fallback('index.html', { root: dirPath }))

app.listen(PORT, () => {
  console.log('');
  console.log(`Адрес сервера для запуска проекта: http://localhost:${PORT}`);
  console.log('');
});
