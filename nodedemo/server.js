const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var courses = [
    {"title": "Node", "summary":"Server side backend using JS"},
    {"title": "Angular", "summary":"Framework from Google!!"},
    {"title": "React", "summary":"Library from Facebook!!"},
    {"title": "JS", "summary":"Base Programming Language!!"},
    {"title": "Ember", "summary":"Open source UI framework!!"},
    {"title": "CanJS", "summary":"Yet another popular UI framework!!"}
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/courses', (req,res)=> {
    res.json(courses)
})

app.post('/courses', (req,res)=> {
    var course = req.body
    courses.push(course);
    res.json(courses)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))