const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users








app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});