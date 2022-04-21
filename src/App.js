import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/main/login';
import Main from './components/main';
import User from './components/user';
import Admin from './components/admin';
import AdminProfile from './components/admin/profile';
import Dashboard from './components/admin/dashboard';
import Manageruser from './components/admin/manageruser';
import Home from './components/main/home';
import Signup from './components/main/signup';
import ResetPassword from './components/main/resetPassword';
import Userprofile from './components/user/profile';

function App() {
  return (
   <BrowserRouter>
      <Routes >
        <Route element={<Admin />} path = "admin">
          <Route element={<AdminProfile />}path="profile" />
          <Route element={<Dashboard />}path="dashboard" />
          <Route element={<Manageruser />}path="manageruser" />
        </Route>
        <Route element={<Main />} path = "main">
          <Route element={<Home />}path="home" />
          <Route element={<Login />}path="login" />
          <Route element={<Signup />}path="signup" />
          <Route element={<ResetPassword />}path="resetpassword" />
        </Route>
        <Route element={<User />} path = "user">
          <Route element={< Userprofile />}path="uprofile"/>
        </Route>
         { /* <Route element ={<Login />} path="login"></Route> */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
