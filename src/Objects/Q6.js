//

function logObjectKeysAndValues(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { 
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    isRead: true
};

logObjectKeysAndValues(book);

