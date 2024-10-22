const express = require('express');
const app = express();
const PORT = 9000;
const path = require("path");
const filePath = path.join(__dirname, "/views/index.ejs")

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let name = "Nicolas Jakson";
    let place = "Chelsea";
    let now = new Date(Date.now());
    const hours = now.getHours();
    res.render(filePath,{name, hours,destination:place});
})

app.listen( PORT, (err) => {
    if(err) {
        console.log("server not responding");
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
})

