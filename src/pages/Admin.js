import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <Button variant="contained" component={Link} to="/">
        {' '}
        Home
      </Button>
    </>
  );
};

export default Admin;
