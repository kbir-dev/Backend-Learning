const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send(`<button>Done</button>`)
// })
app.use(express.static('public')) 

app.get('/:slug/:second',(req,res)=>{
  res.send(`Hello World this is ${req.params.slug} & ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})