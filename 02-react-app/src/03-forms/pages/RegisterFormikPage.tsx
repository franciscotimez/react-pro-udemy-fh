import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log({ values });
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe tener 2 caracteres o mas')
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Email no es valido.')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe tener 6 caracteres o mas')
            .required('Requerido'),
          password2: Yup.string()
            .min(6, 'Debe tener 6 caracteres o mas')
            .oneOf([Yup.ref("password1")], "No coincide el password")
            .required('Requerido')
        })}
      >
        {
          ({ handleReset }) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
              />

              <MyTextInput
                label="Email"
                name="email"
              />

              <MyTextInput
                label="Password"
                name="password1"
                type="password"
              />

              <MyTextInput
                label="Repeat Password"
                name="password2"
                type="password"
              />

              <button type="submit">Submit</button>
              <button onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
