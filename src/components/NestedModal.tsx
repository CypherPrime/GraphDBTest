import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Grid, IconButton } from '@mui/material';
import LongMenu from './DropDown';
import CustomizedInputsStyled from './InputField';
import { ChildModal } from './ChildModal';
import ClearIcon from '@mui/icons-material/Clear';

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


export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}><AddCircleOutlineIcon sx={{ color: '#737B7D' }} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 781, height: 590 }}>
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8,height:6,width:6,borderRadius:3 }}
          >
            <ClearIcon />
          </IconButton>
          <h2 id="parent-modal-title" >Create a new database</h2>
          <p id="parent-modal-description" style={{ fontWeight: '400', color: '#54595E99', fontSize: 14 }}>
            새로운 데이터베이스를 생성하기 위해 데이터베이스의 유형을 선택하고, 설치 경로와 Port를 입력해주세요.
            추가적으로 최소/최대 메모리 사용량을 입력하면, 이에 맞게 데이터베이스가 실행됩니다.
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
                <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Installation Path</div>
              </Grid>
              <Grid item lg={10}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid item lg={3}>
                    <Button sx={{
                      backgroundColor: '#007EFF',
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: '600',
                      textTransform: 'lowercase',
                      '&:hover': {
                        backgroundColor: '#007EFF',
                      },
                    }} >Choose Folder</Button>
                  </Grid>
                  <Grid item lg={9}  ><CustomizedInputsStyled
                    placeholder='/home/ubuntu/data/address/'
                    width={380}
                  /></Grid>
                </Grid>
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
            <div style={{ color: '#25282B', fontWeight: '700', fontSize: 16, paddingTop: 10, paddingBottom: 10 }}>Optional</div>
            <Grid container sx={{ alignItems: 'center', }}>
              <Grid item lg={4}>
                <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Minimum Memory Usage(-Xms)</div>
              </Grid>
              <Grid item lg={8}>
                <CustomizedInputsStyled
                  placeholder='9999'
                  width={153}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: 'center', }}>
              <Grid item lg={4}>
                <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Maximum Memory Usage(-Xmx)</div>
              </Grid>
              <Grid item lg={8}>
                <CustomizedInputsStyled
                  placeholder='9999'
                  width={153}
                />
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
            <ChildModal />
          </div>

        </Box>
      </Modal>
    </div>
  );
}
