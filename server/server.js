const express = require('express')
const { chats } = require('./data/data')
const { config } = require('dotenv')

config();


const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/v1/chats', (req, res) => {
    res.json(chats);
})

app.get('/api/v1/chats/:id', (req, res) => {
    res.json(chats.find(chat => chat._id === req.params.id));
})


app.listen(port, () => console.log(`app listening on port ${port}!`)) 