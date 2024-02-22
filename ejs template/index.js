const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');

app.get('/', (req, res) => {
  let sitename = "Adidas";
  let searchText = "Search Now";
  let arr = ["Hey",54,65,78]
  res.render("index",{sitename:sitename,searchText:searchText,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})