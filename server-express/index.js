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

app.get("/questions", (req, res) => {
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

app.post("/messages", (req, res) => {
  const q = "insert into messages (`content`, `password`) values (?)"
  const values = [req.body.content, req.body.password]

  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Message has been sent successfully")
  })
})

app.delete("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  const q = "delete from messages where id = ?"

  db.query(q, [messageId], (err, data) => {
    if(err) return res.json(err)
    return res.json("Message has been deleted successfully")
  })
})

app.put("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  const q = "update messages set `content` = ?, `password` = ? where id = ?"

  const values = [
    req.body.content,
    req.body.password
  ]

  db.query(q, [...values, messageId], (err, data) => {
    if(err) return res.json(err)
    return res.json("Message has been updated successfully")
  })
})

app.listen(8800, () => {
  console.log("Connected to backend! ")
})