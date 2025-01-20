import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const ThreeColumnLayout: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Column 1</Typography>
          <Typography>Content for the first column</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Column 2</Typography>
          <Typography>Content for the second column</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Column 3</Typography>
          <Typography>Content for the third column</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ThreeColumnLayout;