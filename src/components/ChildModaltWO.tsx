import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 3,
};

export function ChildModaltWO() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button
      sx={{
        backgroundColor:'#007EFF',
        color:'#FFF',
        textTransform:'capitalize',
        height:50,
        width:198,
        '&:hover': {
          backgroundColor: '#007EFF',
        },
      }}
      onClick={handleOpen}>Create databasefdfd</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button sx={{
            backgroundColor:'#007EFF',
            color:'#FFF',
            height:20,
            width:198
          }} onClick={handleClose}>Create database</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}