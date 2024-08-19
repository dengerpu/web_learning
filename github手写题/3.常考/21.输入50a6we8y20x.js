function extendsString(str) {

}
var extendsString = (str) => str.replace(/(\d+)([a-z]+)/g, (_, $1, $2) => $2.repeat(parseInt($1)));