const app=require('./app')
const fs=require('fs')
const http=require('http')
http.createServer((req,resp)=>{
  resp.write("<h1>Hi this is from response!</h1>")
  resp.end()
}).listen(4500)
//fs.writeFileSync("check.txt","Created through fs module function")
console.log("Welcome To Nodejs")
console.warn("Warning!")
var a= 3
let b=4
var sum=a+b
console.log(sum)
for(i=0;i<=10;i++)
  {
    console.log(i)
  }
  let arr=[1,2,3,4,5,3,7,8,9,10]
  console.log(arr)
  console.log(arr[3])
  console.log(app)
  console.log(app.x)
  console.log(app.y)
  let result=arr.filter((item)=>{
    return(item>3)
  })
  console.log(result)
  console.log(__dirname)
  console.log(__filename)