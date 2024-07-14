import express from "express";
import skiTerms from "./ski-terms.json" assert { type: "json" };
import bodyParser from "body-parser";
import fs from "fs";


const app = express();

app.use("/", express.static("./client"));
app.get("/dictionary", (req, res) => {
    res.json(skiTerms);
})


app.post("/dictionary", bodyParser.json(), (req, res) => {
    skiTerms.push(req.body);
    save();
    res.json({
        status: "success",
        term: req.body
    });
});

app.delete("/dictionary/:term", (req, res) => {
    skiTerms.filter(({ term }) => term !== req.params.term);
    save();
    res.json({
        status: "success",
        removed: req.params.term,
        newLength: skiTerms.length
    });
});

const save = () => {
    fs.writeFile(
        "./ski-terms.json", 
        JSON.stringify(skiTerms, null, 2), err => {
        if(err){
            throw err;
        }
    })
}

app.listen(3000, () => {
    console.log("ski dictionary running at 3000")
});