import React from 'react';
import Box from '@mui/material/Box';
import MuiDivider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Divider = () => {
  return (
    <Box sx={{ padding: '10px', minHeight: '100vh' }}>
      <MuiDivider sx={{ backgroundColor: '#8ecae6', my: '50px' }} />
    </Box>
  );
};

export default Divider;
