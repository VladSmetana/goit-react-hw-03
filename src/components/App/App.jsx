import { useState, useEffect } from 'react';
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { nanoid } from 'nanoid'
const App = () => {
    // используем useState чтобы отображать начальный список номеров
    const [contacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    //  функция для добавления нового номера
    const handleAddContact = (name, number) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        };
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        // Збереження контактів в Local Storage після додавання нового контакту
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const handleDeleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);

        // localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (savedContacts) {
            setContacts(savedContacts);
        }
    }, []);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={handleAddContact} />
            <SearchBox searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
        </div>
    );
};

export default App;
