import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const FORM_INITIAL_VALUES = {
  name: '',
  number: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={css.formAddContainer}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <div className={css.NameNumberContainer}>
            <label className={css.formLabel}>
              {/* <span>Name:</span> */}
              <Field
                type="text"
                name="name"
                autoComplete="off"
                placeholder="name"
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
                autoComplete="off"
                placeholder="number"
                className={css.formInput}
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="number"
              />
            </label>
          </div>
          <button type="submit" className={css.formAddBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
