const express = require("express");
const chance = require("chance").Chance();
const shuffleArray = require("shuffle-array");

const app = express();

app.use(express.static("public"));

const data = {
    headers: ["Name","Age","Prof","Country"],
    rows: new Array(30).fill(undefined).map(() => {
        return [
            chance.name(),
            chance.age(),
            chance.profession(),
            chance.country({full: true})
        ]
    })
}

app.get("/data", (req, res) => {
    res.json({
        headers: data.headers,
        rows: shuffleArray(data.rows),
        lastUpdated: new Date().toISOString()
    });
});


app.listen(3001, () => console.log("app is running"));