import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
} from '../../utils/constants';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';

const FORM_INITIAL_VALUES = {
  name: '',
  number: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_NAME_VALIDATION, 'Too Short!')
    .max(MAX_CHAR_NAME_VALIDATION, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      {/* <h2>Phonebook</h2> */}
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <label className={css.formLabel}>
            {/* <span>Name:</span> */}
            <Field
              type="text"
              name="name"
              // autoComplete="off"
              placeholder="Name"
              className={css.formInput}
            />

            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="name"
            />
          </label>

          <label className={css.formLabel}>
            {/* <span>Number:</span> */}
            <Field
              type="number"
              name="number"
              // autoComplete="off"
              placeholder="Number"
              className={css.formInput}
            />

            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="number"
            />
          </label>

          {/* <button type="submit" className={css.formAddBtn}>
            Add contact
          </button> */}
          <Button type="submit" variant="contained">
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
