import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../../redux/userSlice';

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </div>
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;
