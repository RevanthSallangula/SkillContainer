// Mained in package.json
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(
        "C:/Users/Revanth Sallangula/Downloads/SkillContainer/LandingPage/index.html"
    );
});

app.listen(port, () => {
    console.log(`Server at ${port}`);
});
