import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../../redux/userSlice';
import { Button } from '../../style/components/Button';
import { H1 } from '../../style/components/Heading';
import { Input } from '../../style/components/Input';
import { LoginStyled, LoginWrapper } from '../../style/screens/Login';
import { TextSmall } from '../../style/components/Text';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user?.status === 'success') {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email: email, password: password }));

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
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </div>
        <div>
          <input type="checkbox" />
          <TextSmall>Remember me</TextSmall>
        </div>
        <Button large type="submit">
          Login
        </Button>
      </form>
    </LoginStyled>
  );
}

export default Login;
