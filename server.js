const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Backend! This is a simple demo for the backend of our project.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
