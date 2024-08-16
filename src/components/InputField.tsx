import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';

interface InputProps {
  width?: number;
  placeholder?: string;
}

const BootstrapInput = styled(InputBase)<InputProps>(({ theme, width }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#A4A6B3' : '#A4A6B3',
    fontSize: 16,
    width: width ? `${width}px` : '100%', // Use the width prop here
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `#A4A6B3`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function CustomizedInputsStyled({ width = 200, placeholder = '' }: InputProps) {
  return (
    <FormControl variant="standard">
      <BootstrapInput width={width} placeholder={placeholder} id="bootstrap-input" />
    </FormControl>
  );
}
