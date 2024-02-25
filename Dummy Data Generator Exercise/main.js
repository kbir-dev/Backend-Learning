const express = require('express')
const mongoose = require("mongoose");
const Employee = require("./models/Employee")
const app = express()
const port = 3000

app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/company');

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length-1));
    return arr[rno]
}

app.get('/generate', async (req, res) => {
    //Clear the Collection
    await Employee.deleteMany({});
    //Generating and Saving Data
    for (let index = 0; index < 10; index++) {
        let randomNames = ["Arjun","Karan","Komal","Tanu"]
        let randomLang = ["Python","C","Java"]
        let randomCities = ["Punjab","Haryana","Himachal"]
        let e = await Employee.create({
            name: getRandom(randomNames),  
            salary: Math.floor(Math.random()*20000),  
            language: getRandom(randomLang),  
            city: getRandom(randomCities),  
            isManager: (Math.random()>0.5)?true:false
        })
        await e.save();
    }
    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})