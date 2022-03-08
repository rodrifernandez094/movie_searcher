import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./components/homePage/HomePage";
import MovieList from "./components/searchResults/MovieList";
import MovieInfo from "./components/searchResults/MovieInfo";
import './App.css';
import ScrollUpBtn from "./components/ScrollUpBtn";

function App() {

  return (
    <Router>
        <div className="App">

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies:query">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <MovieInfo />
            </Route>
          </Switch>
          <ScrollUpBtn />
        </div>
    </Router>
  );
}

export default App;
