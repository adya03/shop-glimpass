import React, { useState } from 'react';
import { Box, Typography, Button, FormGroup, FormControlLabel, Switch, Paper, Grid } from '@mui/material';
import Logo from '../assets/logo1.svg'; // Replace with your actual logo path
import Wallet from '../assets/wallet.svg';
import { useNavigate } from 'react-router-dom';
import '../styles/ads.css';
// import WalletIcon from '@mui/icons-material/AccountBalanceWallet'; // This is an icon from MUI

function RunAds() {
  const [imagePreview, setImagePreview] = useState('');
  const [isGlimpassActive, setGlimpassActive] = useState(false);
  const [isInstagramActive, setInstagramActive] = useState(false);
  const [isFacebookActive, setFacebookActive] = useState(false);
  const [isGoogleActive, setGoogleActive] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  const navigate = useNavigate();

  const handleGlimpassToggle = () => setGlimpassActive(!isGlimpassActive);
  const handleInstagramToggle = () => setInstagramActive(!isInstagramActive);
  const handleFacebookToggle = () => setFacebookActive(!isFacebookActive);
  const handleGoogleToggle = () => setGoogleActive(!isGoogleActive);

  const handleImageClick = () => navigate('/wallet');

  return (
    <Paper elevation={0} sx={{ padding: 3 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={6} sm={4}>
          <img src={Logo} alt="Logo" style={{ width: '60%' }} />
        </Grid>
        <Grid item xs={6} sm={4} container justifyContent="flex-end">
        <img src={Wallet} alt="Wallet" style={{ width: '60%' }} onClick={handleImageClick} />
          {/* <WalletIcon style={{ fontSize: '3rem', cursor: 'pointer' }} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center">Run Ads</Typography>
        </Grid>
      </Grid>
      <Box my={2} textAlign="center">
        {imagePreview && (
          <Box mb={2}>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '50%', height: 'auto' }} />
          </Box>
        )}
        <Button variant="contained" sx={{backgroundColor: '#121858'}} component="label">
          Choose file
          <input type="file" hidden onChange={handleFileChange} accept="image/*" />
        </Button>
      </Box>
      
      <Typography variant="h6" gutterBottom align='center' sx={{ mt: 7 }}>
        Run Ads on these platforms
      </Typography>
      <Box border={3} borderColor="grey.300" borderRadius={4} p={2} my={2}>
      <FormGroup>
      <Grid container spacing={1} alignItems="center">
      <Grid item xs={3}>
          <Typography>Glimpass</Typography>
        </Grid>
        <Grid item xs={3}>
          <Switch checked={isGlimpassActive} onChange={handleGlimpassToggle} />
        </Grid>
        <Grid item xs={3}>
          <Typography>Instagram</Typography>
        </Grid>

        <Grid item xs={3}>
          <Switch checked={isInstagramActive} onChange={handleInstagramToggle} />
        </Grid>
        <Grid item xs={3}>
          <Typography>Facebook</Typography>
        </Grid>
        <Grid item xs={3}>
          <Switch checked={isFacebookActive} onChange={handleFacebookToggle} />
        </Grid>
        <Grid item xs={3}>
          <Typography>Google</Typography>
        </Grid>
        <Grid item xs={3}>
          <Switch checked={isGoogleActive} onChange={handleGoogleToggle} />
        </Grid>
        
      </Grid>
    </FormGroup>
    </Box>
    <Button variant="contained" sx={{backgroundColor: '#121858'}} >Run Advertisement</Button>
    </Paper>
  );
}

export default RunAds;
