const express = require('express')
const app = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.set('view engine', 'ejs')
const path = require('path')
const pubDir = path.join(__dirname, 'public')
app.use(express.static(pubDir))
app.get('/', (req, res) =>{
    res.render('index.ejs')
})
app.get('/sponsors', (req, res) =>{
  res.render('sponsor.ejs')
})
app.get('/sessions-workshops', (req, res) =>{
  res.render('sesh.ejs')
})
app.get('/events/culturals/beyond-the-words', (req, res) =>{
  res.render('./events/culturals/beyond-the-words.ejs')
})
app.get('/timeline', (req, res) =>{
  res.render('timeline.ejs')
})
app.get('/about', (req, res) =>{
  res.render('about.ejs')
})
app.get('/faq', (req, res) =>{
  res.render('faq.ejs')
})
app.listen(port);