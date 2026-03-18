// Import required modules
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true})); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ================= DATABASE CONNECTION =================
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Abhi123@#'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// ================= FAKER FUNCTION =================
// Function to generate a random user
const getRandomUser = () => {
  return [
    faker.string.uuid(),        // id
    faker.internet.username(),  // username
    faker.internet.email(),     // email
    faker.internet.password()   // password
  ];
};

// ================= EXPRESS ROUTES =================
// home page to show the counts of user in the DB
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    res.send("Some error in DB");
  }
});

// fetch and show (userid, username, email) of all users -> GET/user
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("users.ejs", { users: users })
    });
  } catch (err) {
    res.send("Some error in DB");
  }
})

// Edit route
app.get("/user/:id/edit", (req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  } catch (err) {
    res.send("Some error in DB");
  }
})

// update route (in DB)
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q =`SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    res.send("Some error in DB");
  }
});


// ================= SERVER =================
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// ================= DATABASE QUERIES =================

// 1. Show all tables (for testing)
/*
let showTablesQuery = "SHOW TABLES";

connection.query(showTablesQuery, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tables:", result);
});
*/

// 2. Insert a single user
/*
let insertSingleUserQuery = 
  "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

let singleUser = getRandomUser();

connection.query(insertSingleUserQuery, singleUser, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Single user inserted:", result);
});
*/

// 3. Insert multiple users manually
/*
let insertMultipleUsersQuery = 
  "INSERT INTO user (id, username, email, password) VALUES ?";

let users = [
  ["123b", "user_b", "b@gmail.com", "passb"],
  ["123c", "user_c", "c@gmail.com", "passc"],
];

connection.query(insertMultipleUsersQuery, [users], (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Multiple users inserted:", result);
});
*/

// 4. Insert 100 fake users (bulk data)
/*
let bulkInsertQuery = 
  "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];

// Generate 100 random users
for (let i = 0; i < 100; i++) {
  data.push(getRandomUser());
}

connection.query(bulkInsertQuery, [data], (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("100 fake users inserted:", result);
});
*/

// ================= CLOSE CONNECTION =================
// Uncomment if you want to close DB connection after queries
// connection.end();