import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AddMovie from './screens/AddMovie/MovieInput';
import EditMovie from './screens/AddMovie/MovieInput';
import Login from './screens/Login/';
import MoviesList from './screens/MoviesList/MoviesList';
import GlobalStyle from './style/UI/global';
import Theme from './style/UI/theme';

function App() {
  return (
    <>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
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
        </Theme>
      </BrowserRouter>
    </>
  );
}

export default App;
