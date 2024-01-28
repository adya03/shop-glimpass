// src/components/Registration.js

import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import logo1 from '../assets/logo1.svg';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    shopName: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };
    return (
        <Container component="main" maxWidth="xs">
            <center>
             <div class="logindiv">
              <img src={logo1} alt="Logo" className="login-logo" />
              <Typography class="head2" component="h1" variant="h5">
                Registration
              </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formData.name}
                        onChange={handleChange}
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="mobileNo"
                        label="Mobile No"
                        name="mobileNo"
                        autoComplete="tel"
                        value={formData.mobileNo}
                        onChange={handleChange}
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="shopName"
                        label="Shop Name"
                        name="shopName"
                        autoComplete="off"
                        value={formData.shopName}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
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
                    />
                    <Button
                        type="submit"
                        halfWidth
                        variant="contained"
                        
                        sx = {{borderRadius:28, color:'white', backgroundColor:"#121858",margin:"20px"}}
                    >
                        Register
                    </Button>
                </form>
            </div>
            </center>
        </Container>
    );
}

export default Registration;
