import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import UserInfo from "./components/User_Info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar
          title="RUKHSAR"
          index="Home"
          userinfo="Users-Info"
          aboutus="About"
        />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About heading="About" />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter text . . . . . . . . ." />
            </Route>
            <Route exact path="/user-info">
              <UserInfo />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <About heading="About" /> */}
    </>
    //  <Navbar />
  );
}

export default App;
