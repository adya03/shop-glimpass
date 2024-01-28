import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import shopkeeperData from '../data/shopkeeperData.json';  // Adjust the path to your JSON file

function ShopkeeperTable() {
    return (
        <div style={{width:600, height:600}}>
        <List>
            <ListItem>
                <ListItemText primary="Name" secondary={shopkeeperData.name} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Available Balance" secondary={`$${shopkeeperData.availableBalance}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Footfall" secondary={shopkeeperData.footfall} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Tariff" secondary={`$${shopkeeperData.tariff}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Location" secondary={shopkeeperData.location} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Contact" secondary={shopkeeperData.contact} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Email" secondary={shopkeeperData.email} />
            </ListItem>
        </List>
        </div>
    );
}

export default ShopkeeperTable;
