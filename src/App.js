// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './Form';
import Project from './Form/project'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/form-1">Form 1</Link>
          </li>
          <li>
            <Link to="/form-2">Form 2</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/form-1">
            <Form />
          </Route>
          <Route path="/form-2">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <p>test1</p>
//     </div>
//   );
// }

// export default App;
