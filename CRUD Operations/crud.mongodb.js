// CRUD Operation

use("CrudDb")

// Create 

db.createCollection("courses")

db.courses.insertOne({
    name:"Karan Mongo Db Learning",
    date:18,
    learning:"great",
    from:"CodeWithHarry"
})
 
db.courses.insertMany([
        {
            "name": "Karan Mongo Db Learning",
            "date": 18,
            "learning": "great",
            "from": "CodeWithHarry"
        },
        {
            "name": "John JavaScript Mastery",
            "date": 20,
            "learning": "excellent",
            "from": "The Net Ninja"
        },
        {
            "name": "Alice Python Basics",
            "date": 15,
            "learning": "good",
            "from": "freeCodeCamp"
        },
        {
            "name": "Emily React Fundamentals",
            "date": 12,
            "learning": "awesome",
            "from": "Traversy Media"
        },
        {
            "name": "Mike Data Structures",
            "date": 22,
            "learning": "challenging",
            "from": "GeeksforGeeks"
        },
        {
            "name": "Sara Java Programming",
            "date": 17,
            "learning": "interesting",
            "from": "JavaBrains"
        },
        {
            "name": "Alex HTML/CSS Basics",
            "date": 14,
            "learning": "fun",
            "from": "W3Schools"
        },
        {
            "name": "Eva Machine Learning",
            "date": 19,
            "learning": "fascinating",
            "from": "Coursera"
        },
        {
            "name": "Daniel Web Development",
            "date": 16,
            "learning": "exciting",
            "from": "Udemy"
        },
        {
            "name": "Sophia SQL Fundamentals",
            "date": 21,
            "learning": "informative",
            "from": "Khan Academy"
        }
])

// Read

let a = db.courses.findOne({date:16});
console.log(a)

// Update

db.courses.updateOne({date: 18}, {$set:{date:100}})

// Delete

db.courses.deleteOne({date:100});