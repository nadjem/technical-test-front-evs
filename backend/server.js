// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let items = [
    {
        id:0,
        username: "jane doe",
        email: "jane.doe@doe.com"
    },
    {
        id:1,
        username: "john doe",
        email: "john.doe@doe.com"
    }
];

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length;
    items.push(newItem);
    res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});