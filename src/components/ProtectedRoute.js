import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';

function ProtectedRoute() {
  useSelector(selectUser);
  const loginToken = localStorage.getItem('login_token');

  return loginToken ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
