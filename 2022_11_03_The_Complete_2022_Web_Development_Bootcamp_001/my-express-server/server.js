const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>010-5538-8151</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>Jake the dog</h1>')
})

app.get('/jake', (req, res) => {
  res.send('<h1>Jake the dog</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})