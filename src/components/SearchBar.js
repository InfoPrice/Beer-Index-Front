import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {
    render() {
        return (
            <Paper item xs={12} elevation={1}>               
                <IconButton item xs={2} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <InputBase className="search-field" item xs={10} placeholder="Buscar" />
            </Paper>
        )
    }
}

export default SearchBar