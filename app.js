const express = require('express')
const dotenv = require('dotenv')
const {sports, cultural, professional} = require('./dataset')
const {webteam, festteam} = require('./members')
dotenv.config()
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
app.get('/events', (req, res) =>{
  res.render('events.ejs')
})

app.get('/events/sports', (req, res) => {
  const payload = {
    data: sports,
    title: 'Sports',
    bg: 'https://images.unsplash.com/photo-1593134094419-a522daae3c63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
  }
  res.render('./events/index.ejs', payload)
})

app.get('/events/cultural', (req, res) =>{
  const payload = {
    data: cultural,
    title: 'Cultural',
    bg: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
  }
  res.render('./events/index.ejs', payload)
})

app.get('/events/professional', (req, res) =>{
  const payload = {
    data: professional,
    title: 'Professional',
    bg: 'https://images.unsplash.com/photo-1589700329490-73e2a07a9c51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
  }
  res.render('./events/index.ejs', payload)
})

app.get('/sessions-workshops', (req, res) =>{
  res.render('sesh.ejs')
})
// app.get('/events/culturals/beyond-the-words', (req, res) =>{
//   res.render('./events/culturals/beyond-the-words.ejs')
// })
app.get('/timeline', (req, res) =>{
  res.render('timeline.ejs')
})
app.get('/about', (req, res) =>{
  res.render('about.ejs')
})
app.get('/faq', (req, res) =>{
  res.render('faq.ejs')
})
app.get('/our-team', (req, res) =>{
  res.render('our-team.ejs', {fest: festteam, web: webteam})
})
app.get('/contact-us', (req, res) =>{
  res.render('contact-us')
})
app.get('/exclusive', (req, res) =>{
  res.render('ann.ejs')
})
app.listen(port);