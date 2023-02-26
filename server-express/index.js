import express from "express";
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"pre_schema"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json("hello this is the backend")
})

app.get("/questions/all", (req, res) => {
  const q = "select * from question"
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.get("/questions/:id", (req, res) => {
  const questionId = req.params.id;
  const q = "select * from question where question_id = ?"
  db.query(q, [questionId], (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post("/questions/ask", (req, res) => {
  const q = "insert into question (`question_title`, `question_main`) values (?)"
  const values = [req.body.title, req.body.main];
  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Message has been sent successfully")
  })
})

app.delete("/questions/:id", (req, res) => {
  const questionId = req.params.id;
  const q = "delete from question where question_id = ?"

  db.query(q, [questionId], (err, data) => {
    if(err) return res.json(err)
    return res.json("Message has been deleted successfully")
  })
})

app.patch("/questions/:id/edit", (req, res) => {
  const questionId = req.params.id;
  const q = "update question set `question_title` = ?, `question_main` = ? where question_id = ?"

  const values = [
    req.body.title,
    req.body.main
  ]

  db.query(q, [...values, questionId], (err, data) => {
    if(err) return res.json(err)
    return res.json("Question has been updated successfully")
  })
})

app.listen(8800, () => {
  console.log("Connected to backend! ")
})