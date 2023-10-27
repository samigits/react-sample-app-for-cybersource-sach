import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CybsIndex from "./components/cybs-index.component";
import CyberConfirm from "./components/cybs-confirm.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={CybsIndex} />
        <Route path="/confirm/" exact component={CyberConfirm} />
      </Router>
    </div>
  );
}

export default App;
