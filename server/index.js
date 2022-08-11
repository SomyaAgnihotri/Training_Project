const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require("cors");


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'cruddatabase'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("entry received.");
});

app.post('/api/teacher/upload', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const department = req.body.department

    const sqlInsert = "INSERT INTO teacher (id, name, department) VALUES (?, ?, ?)"
    db.query(sqlInsert, [id, name, department], (err, result) => {
        console.log(err)
    })
})

app.post('/api/student/upload', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const semester = req.body.semester
    const branch = req.body.branch
    const adminssion_no = req.body.admission_no

    const sqlInsert = "INSERT INTO students (id, name, semester, branch, adminssion_no) VALUES (?, ?, ?, ?, ?)"
    db.query(sqlInsert, [id, name, semester, branch, adminssion_no], (err, result) => {
        console.log(err)
    })
})

app.get("/api/Login", (req, res) => {
        res.send("studentData");
    });

app.get("/api/student/get", (req, res) => {
    const sqlSelect = "SELECT * FROM students cc";
    db.query(sqlSelect, (err, studentData) => {
        res.send(studentData);
    }
    )
});

app.get("/api/teacher/get", (req, res) => {

    const sqlSelect = "SELECT * FROM teacher";
    db.query(sqlSelect, (err, teacherData) => {
        res.send(teacherData);
    })
});

app.listen(8080, ()=>{
    console.log("running on port 8080");
})