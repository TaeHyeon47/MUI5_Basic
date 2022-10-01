import React from 'react';
// import { Button } from '@mui/material';
import CustomButton from './components/CustomButton';
import StylesButton from './components/StylesButton';
import MuiButton from './components/Button';
import MuiTypography from './components/Typography';
import MuiBox from './components/Box';

const App = () => {
  return (
    <div>
      <CustomButton bgColor='#FF7377'>Custom button</CustomButton>
      <StylesButton txtColor='orange' bgColor='#FF7'>
        Styles Button
      </StylesButton>
      {/* <Button>Button</Button> */}
      <MuiButton></MuiButton>
      <MuiTypography />
      <MuiBox />
    </div>
  );
};

export default App;
