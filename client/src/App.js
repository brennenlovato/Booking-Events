import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Notes from './components/notes/Notes';
import Addresses from './components/addresses/Addresses';
import Profile from './components/auth/Profile';
import Event from './components/events/Event';
import Location from './components/locations/Location';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* protected routes are only for pages accessed when we are logged in */}
          <Route path='/' element={<ProtectedRoute /> }>
          <Route path='/events' element={<Event />} />
          <Route path='/locations' element={<Location />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/addresses' element={<Addresses />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;