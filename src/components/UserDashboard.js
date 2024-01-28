import React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import Logo from '../assets/logo1.svg';
import Wallet from '../assets/wallet.svg'; // Replace with your actual logo path
import { useNavigate } from 'react-router-dom';
import ShopkeeperTable from './shopkeeperTable';
// import WalletIcon from '@mui/icons-material/AccountBalanceWallet'; // This is an icon from MUI

function UserDashboard() {
  // Replace these functions with actual event handlers
  const handleAddClick = () => console.log('Add Clicked');
  const handleEditClick = () => console.log('Edit Clicked');
  const handleViewClick = () => console.log('View Clicked');
  const navigate = useNavigate();

    // const navigate = useNavigate();
    // const [showGraph, setShowGraph] = useState(false);
    // const [showTable, setShowTable] = useState(false);
  
    const handleImageClick = () => navigate('/wallet');
    // const handleGraphButtonClick = () => {
    //   setShowGraph(prevShowGraph => !prevShowGraph);
    //   setShowTable(false); // Hide table when showing graph
    // };
    // const handleTableButtonClick = () => {
    //   setShowTable(prevShowTable => !prevShowTable);
    //   setShowGraph(false); // Hide graph when showing table
    // };

  return (
    <Box p={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sm={4}>
          <img src={Logo} alt="Logo" style={{ width: '60%' }} />
        </Grid>
        <Grid item xs={6} sm={4} container justifyContent="flex-end">
        <img src={Wallet} alt="Wallet" style={{ width: '60%' }} onClick={handleImageClick} />
          {/* <WalletIcon style={{ fontSize: '3rem', cursor: 'pointer' }} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center">SHOP</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <ShopkeeperTable/>
            <Button variant="contained" onClick={handleAddClick}>Add</Button>
            <Button variant="outlined" onClick={handleEditClick} style={{ marginLeft: 8 }}>Edit</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="subtitle1" gutterBottom>View total</Typography>
            <Typography variant="h6" gutterBottom>200</Typography>
            <Typography variant="subtitle1" gutterBottom>Add view</Typography>
            <Typography variant="h6" gutterBottom>300</Typography>
            <Button variant="contained" onClick={handleViewClick}>View</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserDashboard;
