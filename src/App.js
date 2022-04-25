import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import GlobalStyle from './GlobalStyles';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
