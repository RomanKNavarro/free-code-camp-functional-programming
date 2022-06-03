// Only change code below this line
function urlSlug(title) {
/*   let splitta = title.split(' ');
  let newSplitta = splitta.filter(letter => letter != '');
  let lowerSplitta = newSplitta.map(letter => letter.toLowerCase()); */
  //return lowerSplitta.join('-');
  //return lowerSplitta;

  return title.split(' ').filter(letter => letter != '').map(letter => letter.toLowerCase()).join('-');
}
// Only change code above this line
console.log(urlSlug("Winter Is Coming"));
console.log(urlSlug(" Winter Is  Coming"));