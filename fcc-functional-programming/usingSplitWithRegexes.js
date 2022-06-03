function splitify(str) {
  // Only change code below this line
  //return str.split(/[\s,-]/)
  return str.split(/[\W_]/)
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
console.log(splitify("This.is.a-sentence"));