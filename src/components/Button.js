import React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiButton = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#BCF4F5',
        minHeight: '100vh',
      }}
    >
      <Stack sx={{ width: '200px', margin: 'auto' }} spacing={1}>
        <Button>simple</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
        <Button disabled>disabled</Button>
        <Button href='#'>Link Button</Button>
        <Button onClick={() => alert('Button Clicked')}>OnClick</Button>
        <Button variant='contained' size='small'>
          contained small
        </Button>
        <Button variant='contained' size='large' color='secondary'>
          contained large
        </Button>
        <Button
          variant='contained'
          style={{ fontSize: '11px', background: '#D9F2B4', color: 'black' }}
        >
          contained fontSize 11px
        </Button>
        <Button variant='contained' startIcon={<AddIcon />}>
          Start Icon
        </Button>
        <Button variant='contained' endIcon={<AddIcon />}>
          End Icon
        </Button>
        <ButtonGroup>
          <Button variant='contained' color='success' startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            variant='contained'
            color='warning'
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ButtonGroup>
        <ButtonGroup variant='contained' color='success'>
          <Button startIcon={<EditIcon />}>Edit</Button>
          <Button startIcon={<DeleteIcon />}>Delete</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default MuiButton;
