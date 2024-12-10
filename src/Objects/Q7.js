
const student = {
    name: 'Alex',
    address: { city: 'New York', zip: '10001' },
    subjects: ['Math', 'Science']
};

function updateStudent(studentObj, newSubject) {

    const city = studentObj.address.city;
    console.log(`City: ${city}`);

    studentObj.subjects.push(newSubject);
    console.log(`Updated subjects: ${studentObj.subjects}`);
}


updateStudent(student, 'History');

