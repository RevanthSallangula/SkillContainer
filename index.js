const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// Serve static files from the root directory
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/LandingPage"));

//Utilizing bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/LandingPage/index.html");
});
app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/dashboard/dashboard.html");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "0000",
    database: "skillcontainerauth",
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log(`Connected to MySQL database`);
    }
});

//Register User
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    const sql =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, results) => {
        if (err) {
            console.error("Error inserting user:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            res.json({ message: "User inserted successfully" });
        }
    });
});

//Log Into User Account
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        console.log(results);
        if (err) {
            console.error("Error searching for user:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            if (results.length > 0) {
                res.json({ message: "Login successful", url: "/dashboard" });
            } else {
                res.json({ message: "Invalid username or password" });
            }
        }
    });
});

//Delete User Account
