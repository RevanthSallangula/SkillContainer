// Mained in package.json
import express from "express";

const app = express();
const port = 3000;

app.use(
    express.static(
        "C:/Users/Revanth Sallangula/Downloads/SkillContainer/LandingPage"
    )
);
app.use(
    express.static(
        "C:/Users/Revanth Sallangula/Downloads/SkillContainer/dashboard"
    )
);

app.use(
    express.static(
        "C:/Users/Revanth Sallangula/Downloads/SkillContainer/dashboard/images"
    )
);
app.get("/", (req, res) => {
    res.sendFile(
        "C:/Users/Revanth Sallangula/Downloads/SkillContainer/LandingPage/index.html"
    );
});

app.get("/dashboard", (req, res) => {
    res.sendFile(
        "C:/Users/Revanth Sallangula/Downloads/SkillContainer/dashboard/dashboard.html"
    );
});

app.listen(port, () => {
    console.log(`Server at ${port}`);
});
