import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckboxInput, MySelectInput, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log({ values });
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Email no es valido.')
            .required('Requerido'),
          terms: Yup.boolean()
            .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opcion no es permitida')
            .required('Requerido')
        })}
      >
        {
          formik => (
            <Form>
              <MyTextInput
                label="First Name"
                name="firstName"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
              />

              <MySelectInput label="Job Type" name="jobType" as="select" >
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr</option>
              </MySelectInput>

              <MyCheckboxInput label="Terms and Conditions" name="terms" />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
