//Write a function that takes an object and a property name as arguments  and returns the value of that property

function getProperty(obj, propName) {
    return obj[propName];
}
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    isRead: true
};

console.log(getProperty(book, "title"));
console.log(getProperty(book, "pages"));
