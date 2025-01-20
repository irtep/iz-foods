import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Foods from './Foods';
import Ingredients from './Ingredients';
import ShoppingBasket from './ShoppingBasket';

const ThreeColumnLayout: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Ruuat</Typography>
          <Foods/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Ainekset</Typography>
          <Ingredients/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Ostoslista</Typography>
          <ShoppingBasket/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ThreeColumnLayout;