const num=["one","two","three"];
let nums=num.push("four");
console.log(num);
let numss=num.pop();
console.log(num);
let numsss=num.shift();
console.log(num);
let numssss=num.unshift("five");
console.log(num);
const num2=["six"];
const nun=num.concat(num2);
console.log(nun);
delete nun[0];
console.log(nun);
const nunn=num.slice(2);
console.log(nunn);
let del=["one","two","three"];
del.splice(1,0,"six","ten");
console.log(del);
let size=del.length;
console.log(size);
let des=del.at(2);
console.log(des);


