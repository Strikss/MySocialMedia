import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Nav from "./Components/Nav/Nav";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile.jsx";
import Settings from "./Components/Settings./Settings";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="content">
      <Route path="/profile" render={()=><Profile 
      posts={props.State.profilePage} 
      dispatch={props.dispatch}
      />}/>
      <Route path="/dialogs" render={()=><Dialogs
       dialog={props.State.messagesPage}
       dispatch={props.dispatch}
        />}/>
      <Route path="/news" component={News}/>
      <Route path="/music" component={Music}/>
      <Route path="/settings" component={Settings}/>
      </div>
    </div>
    
    
);
  }

export default App;
