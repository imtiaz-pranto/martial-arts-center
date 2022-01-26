import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Instructor from "./component/Instructor/Instructor";
import NotFound from "./component/NotFound/NotFound";
import Training from "./component/Training/Training";


function App() {
  return (

    <Router>

      <Header></Header>

      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/training">
          <Training></Training>
        </Route>

        <Route path="/instructor">
          <Instructor></Instructor>
        </Route>

        <Route path="/about-us">
          <About></About>
        </Route>
        
        <Route path="/*">
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>

    </Router>


  );
}

export default App;
