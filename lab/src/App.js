import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPegawai from "./components/ListPegawai";
import AddPegawai from "./components/AddPegawai";
import EditPegawai from "./components/EditPegawai";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPegawai />
          </Route>
          <Route path="/add">
            <AddPegawai/>
          </Route>
          <Route path="/edit/:id">
            <EditPegawai/>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
