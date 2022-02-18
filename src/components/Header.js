import { useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';
import { H2 } from '../style/components/Heading';
import { HeaderStyled } from '../style/components/Header';

function Header({ children }) {
  const dispatch = useDispatch();
  return <HeaderStyled>{children}</HeaderStyled>;
}

export default Header;
