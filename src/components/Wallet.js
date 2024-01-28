import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

function Wallet() {
  const [balance, setBalance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request for adding balance of ${balance} sent.`);
  };

  return (
    <Box
      
      
      alignItems="left"
      height="100"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="xs"
        padding={5}
        boxShadow={2}
        bgcolor="white"
      >
        <Typography component="h1" variant="h5">
          Add Balance
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="balance"
          label="Balance Amount"
          name="balance"
          type="number"
          autoFocus
          value={balance}
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
          onChange={(e) => setBalance(e.target.value)}
        />
        <center>
        <Button
          type="submit"

          halfwidth
          variant="contained"
          
          sx = {{borderRadius:28, color:'white', backgroundColor:"#121858",margin:"20px"}}
        >
          Submit
        </Button>
        </center>
      </Box>
    </Box>
  );
}

export default Wallet;
