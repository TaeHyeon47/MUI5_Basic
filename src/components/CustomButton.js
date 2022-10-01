import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== ('success' || 'bgColor'),
})(({ bgColor, txtColor }) => ({
  border: 0,
  color: txtColor ? txtColor : 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  width: '200px',
  letterSpacing: '-0.1',
  lineHeight: '24px',
  height: '48px',
  padding: '5px 10px',
  margin: '5px',
  textAlign: 'center',
  maxWidth: '320px',
  backgroundColor: bgColor ? bgColor : '#0055d2',
  boxShadow: 'iniset 0 0 0 1px #0055d2',
  textTransform: 'none',
}));

export default CustomButton;
