const express = require('express');
const path = require('path');

const dirPath = path.join(__dirname, '../', 'dist');

const app = express();
const PORT = 3000;

app.use(express.static(dirPath));

app.listen(PORT, () => {
  console.log('');
  console.log(`Адрес сервера для запуска проекта: http://localhost:${PORT}`);
  console.log('');
});
