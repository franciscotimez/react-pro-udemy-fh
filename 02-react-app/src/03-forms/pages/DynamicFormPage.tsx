import { Formik, Form } from 'formik';
import { MySelectInput, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any; } = {};
const requiredFields: { [key: string]: any; } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Minimo ${(rule as any).value || 2} caracteres.`);
    }

    if (rule.type === 'email') {
      schema = schema.email("Email invalido.");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        {
          (formik) => (
            <Form noValidate>
              {formJson.map(({ type, name, placeholder, label, options }) => {
                if (type === 'select') {
                  return <MySelectInput
                    key={name}
                    label={label}
                    type={(type as any)}
                    name={name}
                  >
                    {
                      options?.map(option => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                      ))
                    }
                  </MySelectInput>;
                }

                return <MyTextInput
                  key={name}
                  label={label}
                  type={(type as any)}
                  name={name}
                  placeholder={placeholder}
                />;
              })}
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
