import Nav from "./components/Nav/";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./components/Views/Login";
import Signup from "./components/Views/Signup";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Views/Home";
import Share from "./components/Views/Share";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props}/>}/>
          <Route path="/signup" render={(props) => <Signup {...props} />}/>
          <PrivateRoute path="/share" component={Share}/>
          <Route path="/" render={(props) => <Home {...props} />}/>
        </Switch>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
