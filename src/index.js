const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Manish", "Patel", "Bhopal", "India", "In", "3245", "1234567890", "helloworld@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Ramu", "Patel", "Bhopal", "India","In","1000000","9198563558","chandalala@gmail.com"
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Rakesh", { address: "Pipariya", city: "New York", phone: "9234567890" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "man", "pat", "abc", "Ind", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}