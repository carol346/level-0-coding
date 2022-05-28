let side1 = (a);
let side2 = (b);
let side3 = (c);
let s = ((1/2)*(side1 + side2 + side3));
let area =Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);