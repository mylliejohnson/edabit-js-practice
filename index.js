function nextNum(num){
  let result = 0;
  return result += num + 1
}

nextNum(111)

function powerCalc(voltage, current){
  return voltage * current
}

powerCalc(50, 50)

function remainder(num1, num2){
  return num1 % num2
}

remainder(5, 5)

function perimeter(length, width){
  return length * 2 + width * 2
  // 2 * (length + width)
  // findPerimeter = (h, w) => 2 * (h + w)
}

perimeter(20, 10)

minsToSecs = minutes => {
return minutes * 60
}

minsToSecs(10)

function lessOrEqual(num){
  return ((num <= 0)?true:false)
}

lessOrEqual(1)

function sum(a, b){
  return a + b
}

sum(3,10)

function nameString(name){
 let b = "Edabit"
 let result = ""
  
  return result += name + " " + b
}

nameString('Myllie')

function triangle(side1, side2){
  let side3 = (side1 + side2) -1;

  return side3
}

triangle(4,5)

function printArray(number){
  let newArray = [];

  for(let i = 0; i <= number; i++){
    newArray.push(i)
  }
  return newArray
}

printArray(25)

function points(twoPoints, threePoints){
  return (2 * twoPoints) + (3 * threePoints)
}

points(3,5)