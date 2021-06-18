import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
}));

function MenuDesktop() {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu" 
                        aria-controls="simple-menu" 
                        aria-haspopup="true" 
                        onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                        <MenuItem onClick={handleClose}>Iconen insturen</MenuItem>
                        <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Menu>
                    <Typography variant="h5" color="inherit">
                        Beeldbank digibeten
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuDesktop;
