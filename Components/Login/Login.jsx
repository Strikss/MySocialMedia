import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} placeholder={"Login"} name={"login"} />
      </div>
      <div>
        <Field component={"input"} placeholder={"Password"} name={"password"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
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
