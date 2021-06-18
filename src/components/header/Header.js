import logo from './../../logo.svg';
import './header.css';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import React from 'react';
import Box from '@material-ui/core/Box';

function Header() {
  return (
      <Box className="Header">
        <Paper elevation={3}>
            <Typography variant="h4" component="h1" className="HeaderText" gutterBottom>
                A nice header image and title here
            </Typography>
            <img src={logo} className="App-logo" alt="logo" />
        </Paper>
      </Box>
  );
}

export default Header;
