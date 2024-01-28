import React from 'react';
import { Grid, List, ListItem, ListItemText } from '@mui/material';
import shopkeeperData from '../data/shopkeeperData.json'; // Adjust the path to your JSON file

function ShopkeeperTable() {
    return (
        <List>
            <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                    <ListItem>
                        <ListItemText primary="Name" secondary={shopkeeperData.name} />
                    </ListItem>
                </Grid>
                {/* Uncomment if you want to use these fields */}
                {/* <Grid item xs={12} sm={6}>
                    <ListItem>
                        <ListItemText primary="Available Balance" secondary={`$${shopkeeperData.availableBalance}`} />
                    </ListItem>
                </Grid> */}
                <Grid item xs={6} sm={6}>
                    <ListItem>
                        <ListItemText primary="Footfall" secondary={shopkeeperData.footfall} />
                    </ListItem>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <ListItem>
                        <ListItemText primary="Tariff" secondary={`$${shopkeeperData.tariff}`} />
                    </ListItem>
                </Grid> */}
                <Grid item xs={6} sm={6}>
                    <ListItem>
                        <ListItemText primary="Location" secondary={shopkeeperData.location} />
                    </ListItem>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <ListItem>
                        <ListItemText primary="Contact" secondary={shopkeeperData.contact} />
                    </ListItem>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <ListItem>
                        <ListItemText primary="Email" secondary={shopkeeperData.email} />
                    </ListItem>
                </Grid>
            </Grid>
        </List>
    );
}

export default ShopkeeperTable;
