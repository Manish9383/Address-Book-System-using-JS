const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Manish", "Patel", "Bhopal", "India", "In", "3245", "1234567890", "helloworld@gmail.com"
);

console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
