import React from 'react';
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';

const ContactList = ({ contactList, onDeleteContact }) => {
    return (
        <ul className={styles.contactList}>
            {contactList.map(({ id, name, number }) => {
                return (
                    <li key={id} className={styles.contact}>
                        <span>{name}: </span>
                        <span>{number}</span>
                        <button onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                )
            })}
       </ul>
    );
}

ContactList.propTypes = {
    contactList: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
 
export default ContactList;