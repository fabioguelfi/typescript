let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
//episode = "4";
console.log("This is episode " + episode)
episode = episode + 1
console.log("Next episode is " + episode)


let favoriteDroid: string
favoriteDroid = 'BB-8'
//favoriteDroid = 10
console.log('Favorite Droid is ' + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
  return parsecs < 12
}
let distance = 11
console.log(`Is ${ distance } parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'yes':'no'}`)

// exemple arrow function
let call = (name:string) => console.log(`Do u copy, ${name}?`)
call('fabio guelfi')

// params defaults in typescript
 function inc (speed: number , inc: number = 1): number {
   return speed + inc
 }

 console.log(`inc (5,1) = ${inc(5,1)}`)
 console.log(`inc (5) = ${inc(5)}`)
