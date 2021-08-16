const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.json("Hi working");

});

app.listen(3000, () => {
    console.log(`Working!`)
}
);