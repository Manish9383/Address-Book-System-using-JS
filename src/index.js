const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Manish", "Patel", "Bhopal", "India", "Madhya Pradesh", "462001", "9876543210", "helloworld@gmail.com"
    );
    
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Ramu", "Patel", "Bhopal", "India","Madhya Pradesh","462002","9564873210","chandalala@gmail.com"
    );
    
    
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Manish", { address: "Raura", city: "London", phone: "2365985628" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
    console.log(addressBook.deleteContact("Arpita"));
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "Maan", "Patel", "indore", "India", "8978098", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}