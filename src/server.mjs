import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.get("/", (req, res) =>
    res.send({response : "OK"}))

app.get('/asicip', (req, res) =>
    res.send({asicip: "Some ASIC IP"}))

app.get('/new', (req, res) =>
    res.send("Hello"))

app.listen(PORT,() => console.log(`Server run on http://${HOST}:${PORT}`))
