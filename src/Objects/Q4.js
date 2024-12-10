//Write a function that checks if a key exists in an object. Return true if it exists, otherwise false

function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    isRead: true
};

console.log(hasKey(book, "author")); 
console.log(hasKey(book, "publisher")); 
