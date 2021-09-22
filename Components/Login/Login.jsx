import { Field, reduxForm } from "redux-form";
import { PostAreaStyle } from "../Common/FormStyle/FormStyle";
import { required, setMaxlength } from "../Validate/Validate";
const setMaxLength10 = setMaxlength(10);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={PostAreaStyle}
          placeholder={"Login"}
          name={"login"}
          Formtype="input"
          validate={[required, setMaxLength10]}
        />
      </div>
      <div>
        <Field
          component={PostAreaStyle}
          placeholder={"Password"}
          name={"password"}
          Formtype="input"
          validate={[required, setMaxLength10]}
        />
      </div>
      <div>
        <Field
          component={PostAreaStyle}
          name={"rememberMe"}
          type={"checkbox"}
          Formtype="input"
          validate={[required, setMaxLength10]}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  let submit = (formdata) => {
    console.log(formdata);
  };
  return (
    <>
      <h1>Log in</h1>
      <LoginReduxForm onSubmit={submit} />
    </>
  );
};

export default Login;
