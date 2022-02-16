import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AddMovie from './screens/AddMovie/MovieInput';
import EditMovie from './screens/AddMovie/MovieInput';
import Login from './screens/Login/Login';
import MoviesList from './screens/MoviesList/MoviesList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MoviesList />} />
            <Route path="/addMovie" element={<AddMovie />} />
            <Route path="/editMovie/:id" element={<EditMovie />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/notFound" element={<h2>Not found</h2>} />
          <Route path="/*" element={<h2>Not found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
