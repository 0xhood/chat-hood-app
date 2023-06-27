const express = require('express')
const { chats } = require('./data/data')



const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/v1/chats', (req, res) => {
    res.json(chats);
})


app.listen(port, () => console.log(`app listening on port ${port}!`)) 