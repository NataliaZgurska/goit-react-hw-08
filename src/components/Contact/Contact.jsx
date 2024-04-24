import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactItemTextContainer}>
        <p className={css.contactItemText}>{name}</p>

        <p className={css.contactItemText}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.deleteBtn}>
        <MdDeleteForever size={36} color="blue" />
      </button>
    </>
  );
};

export default Contact;
