let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(),now.getDate() + 18);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate() + 8);
let diff = date2 - date1;

console.log(diff / 1000 / 60 / 60 / 24);