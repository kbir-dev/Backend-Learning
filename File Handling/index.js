import fs from "fs/promises"

console.log("starting...")
// let a = await fs.readFile("two.txt")
// console.log(a.toString())
await fs.appendFile("two.txt","\nVery Good Bro")
let data = await fs.readFile("two.txt")
console.log(data.toString())
console.log("ending...")