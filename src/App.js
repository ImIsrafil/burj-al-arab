import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ServicesContext from './context/ServicesContext';

function App() {
  return (
    <div className='w-screen relative'>
      <ServicesContext>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </ServicesContext>
    </div>
  );
}

export default App;
