let myMap = new Map([
    ['name', 'tariel'],
    ['age', 16],
    ['isStudent', true],
    ['country', 'Georgia'],
    ['score', 95]
]);
console.log("get('name'):", myMap.get('name'));  
myMap.set('job', 'Developer');  
console.log("has('age'):", myMap.has('age'));  
myMap.delete('score');
console.log("keys():", [...myMap.keys()]);
console.log("values():", [...myMap.values()]);
console.log("entries():", [...myMap.entries()]);

let mySet = new Set([10, 20, 30, 40, 50]);;
mySet.add(60);
console.log("has(30):", mySet.has(30));  
mySet.delete(20);  
console.log("values():", [...mySet.values()]);
console.log("size:", mySet.size);
