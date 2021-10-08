import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import { initializeApp } from "./Redux/appReducer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import MusicContainer from "./Components/Music/MusicCointainer";
import Nav from "./Components/Nav/Nav";
import News from "./Components/News/News";
import Settings from "./Components/Settingsss/Settings";
import { compose } from "redux";
import { Switch, withRouter } from "react-router";
import Preloader from "./Components/Common/Preloader/Preloaders";
import { Redirect } from "react-router";

const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./Components/Users/UsersContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("some error has ocured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="content">
          <Suspense fallback={<Preloader />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <MusicContainer />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
