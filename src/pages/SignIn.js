import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from '../components/views/Login';
import Register from '../components/views/Register';
import Forgot from '../components/views/Forgot';
const Auth = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/" element={<Login />} />
      </Routes>
  );
};

export default Auth;
