const express = require('express');

const app = express();

const PORT = 3000;
const friends = require('./friendList.json');

app.use((req, res, next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() -start;
    // console.log(` `);
    console.log(`${req.method} :: ${req.url} - ${delta}ms`);    
});

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('::Express crude server::')
})

app.get('/friends', (req, res)=>{
    res.json(friends);
})

app.get('/friends/:friendsId', (req, res)=>{
    const friendId = Number(req.params.friendsId);
    let friend = friends[friendId];
    if (friend){
        res.status(200).json(friend);
    } else{
        res.status(404).json({
            error: "::Friend Not Found::"
        });
    }
})

app.listen(PORT, ()=>{
    console.log('Listening on port: ', PORT);
})

