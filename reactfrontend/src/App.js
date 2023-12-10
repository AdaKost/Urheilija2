//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
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

// Bootstrap käyttöön
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="leftPanel">
          <Header />
        </div>
        <div className="rightPanel">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ListUrheilijat />
                </>
              }
            />
            <Route
              path="/add"
              element={
                <>
                  <AddUrheilija />
                </>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <>
                  <EditUrheilija />
                </>
              }
            />
            <Route
              path="/find/:id"
              element={
                <>
                  <FindUrheilija />
                </>
              }
            />
            <Route
              path="/delete/:id"
              element={
                <>
                  <DeleteUrheilija />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
