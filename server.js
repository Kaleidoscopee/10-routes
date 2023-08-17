const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users

//Routes
app.get("/Home", (req, res)=>{
    res.send(`<h1>Home</h1>
    <p>Welcome to our site!</p>
    `);
});

app.get("/AboutMe", (req, res)=>{
    res.send(`<h1>This site is owned by Jose</h1>
    <p>I'm from New York!</p>
    `);
});

app.get("/Hobbies", (req, res)=>{
    res.send(`<h1>Hobbies:</h1>
    <ol>
        <li>MMA</li>
        <li>Biking</li>
        <li>Basketball</li>
    </ol>
    `);
});

app.get("/AboutMe", (req, res)=>{
    res.send(`<h1>This site is owned by Jose</h1>
    <p>I'm from New York!</p>
    `);
});

app.get("/AboutMe", (req, res)=>{
    res.send(`<h1>This site is owned by Jose</h1>
    <p>I'm from New York!</p>
    `);
});

app.get("/Other Page", (req, res)=>{
    res.send(`<h1>This is another Page</h1>
    <p>Wow! How original!</p>
    `);
});

app.get("/Info", (req, res)=>{
    res.send(`<h1>Info Page</h1>
    <p>Pretend there's cool relevant info here</p>
    `);
});

app.get("/Profile", (req, res)=>{
    res.send(`<h1>Profile</h1>
    <p>Imagine this is your profile page.</p>
    `);
});

app.get("/FakeError", (req, res)=>{
    res.send(`<h1>Sorry</h1>
    <p>Looks like your page didn't load :(</p>
    `);
});






app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});