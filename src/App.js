import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AddMovie from './screens/MovieInput/MovieInput';
import EditMovie from './screens/MovieInput/MovieInput';
import Login from './screens/Login/Login';
import MoviesList from './screens/MoviesList/MoviesList';
import GlobalStyle from './style/theme/global';
import Theme from './style/theme/theme';

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
