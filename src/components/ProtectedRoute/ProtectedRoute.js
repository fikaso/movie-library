import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';

function ProtectedRoute() {
  const user = useSelector(selectUser);
  return user?.status === 'success' ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
