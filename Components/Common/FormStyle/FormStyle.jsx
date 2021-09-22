import s from "./FormStyle.module.css";
export const PostAreaStyle = ({ input, meta, Formtype, ...props }) => {
  debugger;
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
