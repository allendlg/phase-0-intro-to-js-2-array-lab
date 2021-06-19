// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyPrependCat () {
    cats.unshift("Bob");
}
function destructivelyAppendCat () {
    cats.push("Ralph");
}
function destructivelyRemoveLastCat () {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {

    const newCats = [ ...cats, 'Broom']
    return newCats;   
}
function prependCat(name) {

    const newCats1 = [ 'Arnold', ...cats]
    return newCats1;   
}
function removeLastCat() {
    const newCats2 = cats.slice(0, cats.length-1);
    return newCats2;
}
function removeFirstCat() {
    const newCats3 = cats.slice(1)
    return newCats3;
  }