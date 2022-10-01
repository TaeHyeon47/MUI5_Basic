import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import sponge_bob from '../assets/spongebob.png';

const MuiBox = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#f4a261', minHeight: '100vh' }}>
        <Stack sx={{ width: '200px', margin: 'auto' }}>
          <Box>I am Box</Box>
          <Box sx={{ bgcolor: 'primary.main' }}>I am primary color box</Box>
          <Box sx={{ color: 'secondary.main' }}>I am secondary color box</Box>
          <Box sx={{ m: 1 }}>Margin 1</Box>
          <Box sx={{ p: 1 }}>Padding 1</Box>
          <Box component='span'>I am span</Box>
          <Box component='img' src={sponge_bob} />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5].map((_, index) => {
              return (
                <Box>
                  <Box
                    component='img'
                    src={sponge_bob}
                    sx={{ maxHeight: '50px' }}
                  />
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {[1, 2, 3, 4, 5].map((_, index) => {
              return (
                <Box>
                  <Box
                    component='img'
                    src={sponge_bob}
                    sx={{ maxHeight: '50px' }}
                  />
                </Box>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MuiBox;
