// Contact.jsx
import React from 'react';
import css from './Contact.module.css'
import UserIcon from '/public/UserIcon.jsx'
import Phone from "../../../public/Phone.jsx";

const Contact = ({ contact, onDelete }) => {
    return (
        <div className={css.contactContainer}>
            <div className={css.contact}>
                <p className={css.info}><UserIcon color={'orange'} />{contact.name}</p>
                <p className={css.info}><Phone color={'orange'}/>{contact.number}</p>
        </div>
            <button className={css.delete} onClick={onDelete}>Delete</button>
        </div>

    );
};

export default Contact;
