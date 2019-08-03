let not1: number = 10
let not2: number = 5
let not3: number = 7 

//let fMedia = function(nota1:number,nota2:number,nota3:number) : number{
//    return (nota1+nota2+nota3)/3
//}

let fMedia = (nota1:number,nota2:number,nota3:number) => (nota1+nota2+nota3)/3

console.log(`A média é ${fMedia(not1,not2,not3)}`)