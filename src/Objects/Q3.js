//Write a function that adds a new property (publisher) to an object and updates an existing property (pages) with a new value
function updateBook(obj, publisher, newPages) {
    obj.publisher = publisher;
    obj.pages = newPages;      
    return obj;
}
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    isRead: true
};

updateBook(book, "J.B. Lippincott & Co.", 324);

console.log(book);

