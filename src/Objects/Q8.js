const person = {
    name: 'Alice',
    details: {
        age: 30,
        city: 'Hyderabad'
    }
};

function shallowCopy(obj) {
    return { ...obj }; 
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj)); 
}

const shallowCopiedPerson = shallowCopy(person);
const deepCopiedPerson = deepCopy(person);

person.details.city = 'Bangalore';

console.log(person.details.city);          
console.log(shallowCopiedPerson.details.city); 
console.log(deepCopiedPerson.details.city);   
