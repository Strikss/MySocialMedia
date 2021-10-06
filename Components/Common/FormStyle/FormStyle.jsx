import s from "./FormStyle.module.css";
import { Field } from "redux-form";
export const PostAreaStyle = ({ input, meta, Formtype, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? s.formControlError : s.formControl}>
      <div>
        <Formtype {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const fieldCreator = (name, component, placeholder, type) => {
  return (
    <div>
      <Field
        name={name}
        component={component}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
