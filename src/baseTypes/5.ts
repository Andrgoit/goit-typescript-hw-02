/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type union = string | number;

let union;
if (typeof union === "number") {
  console.log("union is  number!");
}
if (typeof union === "string") {
  console.log("union is string!");
}
//--------------------------------------
//--------------------------------------
type literal = "enable" | "disable";
let literal;
