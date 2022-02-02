import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button component={Link} to="/admin">
        {' '}
        Admin
      </Button>
    </>
  );
};

export default Home;
