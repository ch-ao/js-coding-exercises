function reverseCase(x) {
  let y = x.split('')
  y = y.map(x => x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase())
  console.log(y.join(''))
}
// reverseCase('Happy Birthday')

let x = 'asdlasd csad asds asd asas das'

let y = x.split(' ')

let number= [12, 12, 431, 31,123 ,312 , 213]

console.log(number.reduce((acc, cv) => acc + cv + ' ', ''))


