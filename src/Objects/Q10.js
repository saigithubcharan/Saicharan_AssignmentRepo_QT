function objectToArray(obj) {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

const user = { id: 101, name: 'John', age: 30 };
const result = objectToArray(user);

console.log(result);