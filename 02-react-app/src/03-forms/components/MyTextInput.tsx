import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} />
      {
        meta.touched && meta.error && (
          <span>{meta.error}</span>
        )
      }
    </>
  );
};
