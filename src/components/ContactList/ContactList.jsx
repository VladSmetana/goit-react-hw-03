// ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact.jsx';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className={css.box}>
            {contacts.map((contact) => (
                <div className={css.contactContainer} key={contact.id}>
                    <Contact contact={contact} onDelete={() => onDeleteContact(contact.id)} />
                </div>
            ))}
        </div>
    );
};

export default ContactList;
