import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../../redux/userSlice';
import { Button } from '../../style/components/Button';
import { H1 } from '../../style/components/Heading';
import { CheckBoxContainer, Input } from '../../style/components/Input';
import { LoginStyled, LoginWrapper } from '../../style/screens/Login';
import { TextSmall } from '../../style/components/Text';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user?.status === 'success') {
      navigate('/');
    } else {
      const emailCache = localStorage.getItem('email');
      const passwordCache = localStorage.getItem('password');
      if (emailCache && passwordCache) {
        setEmail(emailCache);
        setPassword(passwordCache);
      }
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email: email, password: password, remember: remember }));

    setEmail('');
    setPassword('');
  };

  return (
    <LoginStyled>
      <H1>Sign in</H1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <Input
            type="password"
            autocomplete="on"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </div>
        <CheckBoxContainer>
          <Input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            value={remember}
            id="checkbox"
          />
          <label htmlFor="checkbox">
            <TextSmall>Remember me</TextSmall>
          </label>
        </CheckBoxContainer>
        <Button large type="submit">
          Login
        </Button>
      </form>
    </LoginStyled>
  );
}

export default Login;
