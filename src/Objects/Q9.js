function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }; 
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = mergeObjects(obj1, obj2);

console.log(mergedObj); 

