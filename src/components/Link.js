import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Stack } from '@mui/system';

const MuiLink = () => {
  return (
    <Box>
      <Box>
        <Stack sx={{ width: '200px', margin: '50px auto' }} spacing={1}>
          <Link>Default Link</Link>
          <Link underline='none'>Underline none</Link>
          <Link underline='hover'>Underline hover</Link>
          <Link underline='always'>Underline always</Link>
          <Link color='error' variant='h5'>
            Underline always
          </Link>
          <Link href='http://www.google.com'>Google link</Link>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <Link component={RouterLink} to='/'>
              Home
            </Link>
            <Link component={RouterLink} to='about'>
              About
            </Link>
            <Link component={RouterLink} to='contact'>
              Contact
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MuiLink;
