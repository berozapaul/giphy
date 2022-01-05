import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';


/*
 * Purpose: The purpose of this component is to render nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header = () =>{
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography>Giphy</Typography>
            </Toolbar>
        </AppBar>
   )
};
export default Header;
