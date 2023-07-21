// Mained in package.json
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 4000;

app.use(express.static(`${__dirname}/LandingPage/`));
app.use(express.static(`${__dirname}/dashboard/`));
app.use(express.static(`${__dirname}/dashboard/images/`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/LandingPage/index.html`);
});

app.get("/dashboard/", (req, res) => {
    res.sendFile(`${__dirname}/dashboard/dashboard.html`);
});

app.listen(port, () => {
    console.log(`Server at ${port}`);
    console.log("Current directory:", __dirname);
});
