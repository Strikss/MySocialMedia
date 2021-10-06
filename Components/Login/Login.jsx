import { connect } from "react-redux";
import { fieldCreator } from "../Common/FormStyle/FormStyle";
import { Field, reduxForm } from "redux-form";
import { PostAreaStyle } from "../Common/FormStyle/FormStyle";
import { required, setMaxlength } from "../Validate/Validate";
import { logInThunk } from "../../Redux/authReducer";
import { Redirect } from "react-router";
import s from "./Login.module.css";
const setMaxLength30 = setMaxlength(30);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={PostAreaStyle}
          placeholder={"Email"}
          name={"email"}
          Formtype="input"
          validate={[required, setMaxLength30]}
        />
      </div>
      <div>
        <Field
          component={PostAreaStyle}
          placeholder={"Password"}
          name={"password"}
          type="password"
          Formtype="input"
          validate={[required, setMaxLength30]}
        />
      </div>
      <div>
        <Field
          component={PostAreaStyle}
          name={"rememberMe"}
          type="checkbox"
          Formtype="input"
          validate={[required, setMaxLength30]}
        />
        remember me
      </div>
      <div>
        {props.captcha && <img src={props.captcha} />}
        {props.captcha && fieldCreator("captcha", "input", "Enter symbols")}
      </div>
      <div>
        <button>Login</button>
      </div>
      {props.error && <div className={s.error}>{props.error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  let submit = (formData) => {
    props.logInThunk(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <>
      <h1>Log in</h1>
      <LoginReduxForm onSubmit={submit} captcha={props.captcha} />
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { logInThunk })(Login);
