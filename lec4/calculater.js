// create calculter  using  javascript!
  let random = Math.random()
   let prompt = require("prompt-sync")();
    let a = prompt("Enter first number")
     let b = prompt("Enter second number")
      let c = prompt("Enter operator")

       let  obj = {
        "+": "-",
         "*" :"+",
         "-":"/" ,
         "/": "**"
     }
      if(random >0.1){
      console.log(`the result is ${a} ${c} ${b}`)
       console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
      }

      else {
         c=obj[c]
         console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
      }