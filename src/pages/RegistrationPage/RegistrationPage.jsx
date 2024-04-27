import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

// import { addContact } from '../../redux/contacts/operations';
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from '../../utils/constants';

import css from './RegistrationPage.module.css';
import { register } from '../../redux/auth/authOperations';

const FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `Enter name more than ${MIN_CHAR_NAME_VALIDATION} characters!`
    )
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Enter name less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    )
    .required('Required'),
  email: Yup.string()
    .required('Email address is required!')
    .email('You must enter valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Enter password longer than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('RegistrationPage values', values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.formAddContainer}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <div className={css.NameNumberContainer}>
            <label className={css.formLabel}>
              <span>Name:</span>
              <Field
                type="text"
                name="name"
                // autoComplete="off"
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
              <span>Email:</span>
              <Field
                type="email"
                name="email"
                // autoComplete="off"
                placeholder="email"
                className={css.formInput}
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="email"
              />
            </label>
            <label className={css.formLabel}>
              <span>Password:</span>
              <Field
                type="password"
                name="password"
                // autoComplete="off"
                placeholder="password"
                className={css.formInput}
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="password"
              />
            </label>
          </div>
          <button type="submit" className={css.formAddBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;

// const RegistrationPage = () => {
//   return <div>RegistrationPage</div>;
// };

// export default RegistrationPage;
