// src/components/FootfallTable.js

import React from 'react';
import footfallData from '../data/footfallData.json';  // Adjust path to your footfallData.json file
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const FootfallTable = () => {
    return (
        <div style={{ width: '400px', height: '400px', marginTop:'70px'}}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Footfall</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {footfallData.data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {item.date}
                            </TableCell>
                            <TableCell align="right">{item.footfall}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default FootfallTable;
