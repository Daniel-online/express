const express = require('express');

const app = express();

const PORT = 3000;
app.get('/', (req,res)=>{
    res.send('::Express crude server::')
})

app.get('/messages', (req, res)=>{
    res.send('<ul><li>item 1</li></ul>')
})

app.post('/messages', (req, res)=>{
    console.log('Updating messages...');
    res.send
})

app.listen(PORT, ()=>{
    console.log('Listening on port: ', PORT);
})

