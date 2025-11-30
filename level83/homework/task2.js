
const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log("საწყისი ზომა:", mySet.size);
mySet.add(6);
console.log("შემდეგ დამატება 6:", mySet);
mySet.delete(2);
console.log("შემდეგ წაშლა 2:", mySet);
console.log("საბოლოო ზომა:", mySet.size);
