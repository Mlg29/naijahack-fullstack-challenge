import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Member from "./pages/member"


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/members" component={Member} />
        </Switch>
       
      </Router>

    </div>
  );
}

export default App;
