const express = require('express');
const app = express();
const path = require('path');
app.set('template engine',"ejs");

const filePath = path.join(__dirname,'/views/index.ejs')
const filePath1 = path.join(__dirname,'/views/products.ejs')


const products = [
    {
        name:"Apple iphone 16",
        price:"2000 $"
    },
    {
        name:"Sony Bravia",
        price:"500 $"
    },
    {
        name:"Koenigsegg",
        price:"3000000 $"
    },
    {
        name:"Samsung S22 Ultra",
        price:"500 $"
    },
    {
        name:"Lenovo Legion",
        price:"1500 $"
    },
    {
        name:"Acer Nitro V",
        price:"1500 $"
    },
    {
        name:"Alienware X16",
        price:"1500 $"
    }
]

app.get('/',(req,res) => {
    const name = "Daksh"
    res.render(filePath,{name});
})

app.get('/products',(req,res) => {
    res.render(filePath1,{products});
})

app.listen(8000,(err) => {
    if(err){
        console.log("error connecting to server")
    } else {
        console.log("server connected at port 8000")
    }
})