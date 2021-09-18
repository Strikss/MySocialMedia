import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MusicContainer from "./Components/Music/MusicCointainer";
import Nav from "./Components/Nav/Nav";
import News from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Settings from "./Components/Settingsss/Settings";
import UsersContainer from "./Components/Users/UsersContainer";


const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Nav/>
      <div className="content">
      <Route path="/profile/:userId?" render={()=><ProfileContainer/>}/>
      <Route path="/dialogs" render={()=><DialogsContainer/>}/>
      <Route path="/news" component={News}/>
      <Route path="/music" render={()=><MusicContainer/>}/>
      <Route path="/settings" render={()=><Settings/>}/>
      <Route path="/users" render={()=><UsersContainer/>}/>

      </div>

    </div>
   
    
);
  }

export default App;
