import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.list}>
        {contacts.map(({id, name, number}) => (
            <li className={s.item} key={id}>
                <p>{name}: {number}</p>
                <button className={s.btn} onClick={() => onDeleteContact(id)} type="button">Delete</button>
            </li>
        ))}
    </ul>
);

export default ContactList;