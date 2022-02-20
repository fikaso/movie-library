import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../../redux/userSlice';
import { Button } from '../../style/components/Button';
import { H1 } from '../../style/components/Heading';
import { Input } from '../../style/components/Input';
import { CheckBoxContainer, LoginStyled } from './LoginStyled';
import { TextSmall } from '../../style/components/Text';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [formErrors, setFormErrors] = useState({});

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

  const validate = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (formValues.email === '' || !formValues.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(formValues.email)) {
      errors.email = 'This is not a valid email format';
    }
    if (formValues.password === '' || !formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate({ email: email, password: password });

    if (errors && Object.entries(errors).length !== 0) {
      setFormErrors(errors);
    } else {
      dispatch(login({ email: email, password: password, remember: remember }));

      setEmail('');
      setPassword('');
    }
  };

  return (
    <LoginStyled>
      <H1>Sign in</H1>
      <form onSubmit={handleSubmit}>
        <div>
          {formErrors.email && <p>{formErrors.email}</p>}
          <Input
            type="text"
            onChange={(e) => {
              setFormErrors({});
              setEmail(e.target.value);
            }}
            placeholder="Email"
            value={email}
            error={formErrors.email}
          />
          {formErrors.password && <p>{formErrors.password}</p>}
          <Input
            type="password"
            autocomplete="on"
            onChange={(e) => {
              setFormErrors({});
              setPassword(e.target.value);
            }}
            placeholder="Password"
            value={password}
            error={formErrors.password}
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
