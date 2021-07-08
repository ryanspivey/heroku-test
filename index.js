require('dotenv');

const express = require('express')
const server = express();

const PORT = process.env.PORT || 5000;

server.get('/api', (req, res)=>{
    res.json({message: 'web 43 is working and ready to server'})
})

server.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`);
})