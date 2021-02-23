import {Route, Switch} from 'react-router-dom'
import {Home, ASICIPSearch, AllASICIPs} from "./pages";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/asicip" component={AllASICIPs}/>
        <Route exact path="/search" component={ASICIPSearch}/>
      </Switch>
  );
}

export default App;
