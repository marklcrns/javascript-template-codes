// transale kebab notation to snake casing
// input: "hello-world"
// output: "hello_world"

function kebabToSnake(str) {
  let newStr = str.replace(/-/g, "_");
  return newStr;
}
