import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';

class NavBar extends Component {

    voltar() {
        this.props.history.goBack();
    }

    render() {
        return (
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                        {this.props.back &&
                            <ArrowBack  onClick={(event) => this.voltar()}/>
                        }
                        </IconButton>
                        <Typography variant="h6" color="inherit"></Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
        )
    }
}

export default NavBar;