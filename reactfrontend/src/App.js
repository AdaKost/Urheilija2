//import logo from './logo.svg';
import "./App.css";
//import Header from "./components/Header";
//import AddPost from "./components/AddPost";
import ListUrheilijat from "./components/ListUrheilijat";
import AddUrheilija from "./components/AddUrheilija";
import EditUrheilija from "./components/EditUrheilija";
import DeleteUrheilija from "./components/DeleteUrheilija";
import FindUrheilija from "./components/FindUrheilija";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "300rem" }} className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddUrheilija />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <EditUrheilija />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
