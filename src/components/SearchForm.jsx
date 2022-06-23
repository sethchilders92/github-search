import React from 'react';
import { Button, TextField } from '@mui/material';

const SearchForm = ({ handleOnSubmit }) => (
    <form onSubmit={handleOnSubmit} className="search-form">
        <TextField id="account" name="account" label="Account" type="text" />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
);

export default SearchForm;
