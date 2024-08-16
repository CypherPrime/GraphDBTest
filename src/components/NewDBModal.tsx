import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import LongMenu from './DropDown';
import CustomizedInputsStyled from './InputField';
import { ChildModaltWO } from './ChildModaltWO';
import { ChildModal } from './ChildModal';


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


function NewDBModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <React.Fragment>
    <Button onClick={handleOpen} 
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
        >Create database</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 781, height: 411 }}>
        <h2 id="parent-modal-title" >Connect with the existing database</h2>
        <p id="parent-modal-description" style={{ fontWeight: '400', color: '#54595E99', fontSize: 14 }}>
        기존에 실행되고 있는 데이터베이스와 연결하기 위해 데이터베이스의 유형과 IP, Port를 입력해주세요.
        </p>
        <h2 id="parent-modal-title" >Required</h2>
        <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
          <Grid container sx={{ gap: 2, alignItems: 'center' }}>
            <Grid item>
              <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Database Type</div>
            </Grid>
            <Grid item>
              <Grid container sx={{ gap: 2, alignItems: 'center' }}>
                <Grid item>
                  <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Blazegraph</div>
                </Grid>
                <Grid item><LongMenu /></Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: 'center', }}>
            <Grid item lg={2}>
              <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>IP Address</div>
            </Grid>
            <Grid item lg={10}>
            <CustomizedInputsStyled
                  placeholder='111.222.333.45'
                  width={380}
                />
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: 'center', }}>
            <Grid item lg={2}>
              <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Port</div>
            </Grid>
            <Grid item lg={10}>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid item lg={9}  ><CustomizedInputsStyled
                  placeholder='9999'
                  width={153}
                /></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <div style={{
          position: 'absolute',
          bottom: 5,
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <ChildModal/>
        </div>

      </Box>
    </Modal>
  </React.Fragment>
  )
}

export default NewDBModal
