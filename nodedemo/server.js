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

app.post('/authenticate', (req, res)=>{
    var email = req.body.email;
    var password = req.body.password;

    if(email == password){
        res.json({auth: true})
    }
    else{
        res.json({auth: false})
    }
})

app.get('/courses', (req,res)=> {
    res.json(courses)
})


app.delete('/courses/:index', (req, res)=>{
    console.log(req.params.index);
    var index = req.params.index
    courses.splice(index, 1)
    // res.json(courses)
    res.status(202).json({message: "Course deleted successfully!!"})
})

app.post('/courses', (req,res)=> {
    var course = req.body
    courses.push(course);
    // res.json(courses)
    res.status(201).json({message: "Course added successfully"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))