import React from 'react';
// import { Button } from '@mui/material';
import CustomButton from './components/CustomButton';
import StylesButton from './components/StylesButton';
import MuiButton from './components/Button';

const App = () => {
  return (
    <div>
      {/* <Button>Button</Button> */}
      <CustomButton bgColor='#FF7377'>Custom button</CustomButton>
      <StylesButton txtColor='orange' bgColor='#FF7'>
        Styles Button
      </StylesButton>
      <MuiButton></MuiButton>
    </div>
  );
};

export default App;
