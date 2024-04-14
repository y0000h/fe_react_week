// const star = [1,2,3,4,5];
// const star2 = Array(5);

// console.log(star2);
// const star3 = [...star2];
// console.log(star3);

// const star4 = [...Array(5)];
// console.log(star4);


const ary = [...Array(5)].map((_, index)=>index+1);
console.log(ary)