//Create an object representing a user and write a function to delete a specific property (e.g., password)

const user = {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "securePassword123",
    age: 30
};
function deleteProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return true; 
    }
    return false; 
}

console.log(deleteProperty(user, "password")); 
console.log(user);

