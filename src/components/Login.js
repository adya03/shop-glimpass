import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import '../styles/login.css';
import logo1 from '../assets/logo1.svg';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
      setLoginStatus('Login Successful');
      navigate('/dashboard');
    }  

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container component="main" maxWidth="xs">
      <center>
      <div class="logindiv">
      <img src={logo1} alt="Logo" className="login-logo" />
        <Typography class="head2" component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            sx={{
              '& label.Mui-focused': {
                  color: '#121858',
              },
              '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                      borderColor: '#121858',
                  },
                  '&.Mui-focused fieldset': {
                      borderColor: '#121858',
                  },
              },
          }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            sx={{
              '& label.Mui-focused': {
                  color: '#121858',
              },
              '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                      borderColor: '#121858',
                  },
                  '&.Mui-focused fieldset': {
                      borderColor: '#121858',
                  },
              },
          }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            halfWidth
            variant="contained"
            sx = {{borderRadius:28, color:'white', backgroundColor:"#121858",margin:"20px"}}
          >
            Sign In
          </Button>
        </form>
        <Button
            type="submit"
            halfWidth
            variant="contained"
            sx = {{borderRadius:28, color:'white', backgroundColor:"#121858",margin:'5px'}}
            onClick = {handleRegister}
          >
            Click here to register
          </Button>
        {loginStatus && <div>{loginStatus}</div>}
      </div>
      </center>
    </Container>
  );
};

export default Login;
