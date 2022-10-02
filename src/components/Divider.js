import React from 'react';
import Box from '@mui/material/Box';
import MuiDivider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Divider = () => {
  return (
    <Box sx={{ padding: '10px', minHeight: '100vh' }}>
      <MuiDivider sx={{ backgroundColor: '#8ecae6', my: '50px' }} />
      <MuiDivider light sx={{ my: '50px' }} />
      <MuiDivider
        variant='inset'
        sx={{ backgroundColor: '#9980B7', borderBottomWidth: 5, my: '50px' }}
      />
      <MuiDivider
        variant='middle'
        sx={{ backgroundColor: '#219ebc', borderBottomWidth: 5, my: '50px' }}
      />
      <MuiDivider sx={{ my: '50px' }}>CENTER</MuiDivider>

      <MuiDivider textAlign='left' sx={{ my: '50px' }}>
        LEFT
      </MuiDivider>

      <MuiDivider textAlign='right' sx={{ my: '50px' }}>
        RIGHT
      </MuiDivider>

      <Box sx={{ display: 'flex' }}>
        <MuiDividerå
          orientation='vertical'
          flexItem
          sx={{
            backgroundColor: 'red',
            borderRightWidth: 5,
            height: '100px',
            margin: '0 auto',
          }}
        />
      </Box>

      <MuiDivider component='li' sx={{ my: '50px' }} />
    </Box>
  );
};

export default Divider;
