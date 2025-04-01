const express = require("express");
const cors = require('cors');
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./films.db", (err) => {
    if (err) {
        console.error("Failed to connect to the database:", err.message);
    } else {
        console.log("Connected to the database.");
        db.run(`
            CREATE TABLE IF NOT EXISTS films (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                year_of_publication INTEGER NOT NULL,
                img TEXT NOT NULL
            )
        `, (err) => {
            if (err) {
                console.error("Failed to create table:", err.message);
            } else {
                insertSampleData();
            }
        });
    }
});

function insertSampleData() {
    db.get("SELECT COUNT(*) AS count FROM films", (err, row) => {
        if (err) {
            console.error("Failed to count films:", err.message);
            return;
        }
        
        if (row.count === 0) {
            const films = [ 
                    ["Inception", 2010, "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH"],
                    ["The Dark Knight", 2008, "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"],
                    ["Interstellar", 2014, "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"],
                    ["The Matrix", 1999, "https://m.media-amazon.com/images/I/51EG732RVbL._SY679_.jpg"],
                    ["Pulp Fiction", 1994, "https://m.media-amazon.com/images/I/61iSkd91m9L._AC_SY679_.jpg"],
                    ["The Shawshank Redemption", 1994, "https://m.media-amazon.com/images/I/71JrPdiGoRL._AC_SY679_.jpg"],
                    ["Fight Club", 1999, "https://m.media-amazon.com/images/I/71aP8qP9D9L._AC_SY679_.jpg"],
                    ["Forrest Gump", 1994, "https://m.media-amazon.com/images/I/91kFlPRfOdL._AC_SY679_.jpg"],
                    ["The Godfather", 1972, "https://m.media-amazon.com/images/I/71OEjVm6s6L._AC_SY679_.jpg"],
                    ["The Godfather Part II", 1974, "https://m.media-amazon.com/images/I/71yYP1Gj+uL._AC_SY679_.jpg"],
                    ["The Lord of the Rings: The Return of the King", 2003, "https://m.media-amazon.com/images/I/51tUNWRzOOL._SY679_.jpg"],
                    ["The Silence of the Lambs", 1991, "https://m.media-amazon.com/images/I/81oNDbD6NPL._AC_SY679_.jpg"],
                    ["Schindler's List", 1993, "https://m.media-amazon.com/images/I/71w7PftqkCL._AC_SY679_.jpg"],
                    ["Gladiator", 2000, "https://m.media-amazon.com/images/I/51v5ZpD4MfL._SY679_.jpg"],
                    ["The Departed", 2006, "https://m.media-amazon.com/images/I/51n+0ft9kOL._AC_SY679_.jpg"],
                    ["Titanic", 1997, "https://m.media-amazon.com/images/I/51yOPXMfTPL._AC_.jpg"],
                    ["Avatar", 2009, "https://m.media-amazon.com/images/I/51v5ZpD4MfL._SY679_.jpg"],
                    ["Joker", 2019, "https://m.media-amazon.com/images/I/71pFkIh4QsL._AC_SY679_.jpg"],
                    ["Avengers: Endgame", 2019, "https://m.media-amazon.com/images/I/91tqQKcZGLL._AC_SY679_.jpg"],
                    ["The Prestige", 2006, "https://m.media-amazon.com/images/I/81paH-V1jTL._AC_SY679_.jpg"]       
            ];

            const stmt = db.prepare("INSERT INTO films (name, year_of_publication, img) VALUES (?, ?, ?)");
            films.forEach(([name, year, img]) => {
                stmt.run(name, year, img, (err) => {
                    if (err) {
                        console.error("Error inserting film:", err.message);
                    }
                });
            });
            stmt.finalize((err) => {
                if (err) {
                    console.error("Failed to finalize statement:", err.message);
                } else {
                    console.log("Inserted 20 films into the database.");
                }
            });
        }
    });
}

app.get("/api", (req, res) => {
    db.all("SELECT * FROM films", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ films: rows });
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});