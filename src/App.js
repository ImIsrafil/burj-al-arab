import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking/Booking';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ServiceDetails from './components/Home/Services/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import NotFound404 from './components/NotFound404/NotFound404';
import AppContext from './context/AppContext';


function App() {
  return (
    <AppContext>
      <>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/service/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path='/booking/:bookingId'>
              <Booking></Booking>
            </Route>
            <Route exact path='*'>
              <NotFound404></NotFound404>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    </AppContext>
  );
}

export default App;
