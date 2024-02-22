const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World2!')
})


app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World Post!')
  })
  
app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World Put!')
  })
app.delete('/', (req, res) => {
    console.log("Hey its a delete request")
    res.send('Hello World Delete!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})