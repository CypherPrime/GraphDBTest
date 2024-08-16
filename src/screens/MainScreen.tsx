import { Box, Grid, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NestedModal from '../components/NestedModal';

function MainScreen() {
    return (
        <div>
            <Grid container sx={{ alignItems: "center", gap: 2 }}>
                <Grid item>
                    <Typography variant='h6' color={'#25282B'} sx={{ fontWeight: '600' }}>Active Database information</Typography>
                </Grid>
                <Grid item>
                    <AddCircleOutlineIcon />
                </Grid>
            </Grid>

            <Box sx={{ width: '100%', height: '160px',backgroundColor:'#FFFFFF' ,borderRadius:1,marginBottom:5}}>
                <Typography sx={{ color: '#3A3A49', fontWeight: '400', fontSize: 16, marginTop: 5, textAlign: 'start' }} >
                    이 관리도구와 연결된 데이터베이스가 없습니다.
                </Typography>
                <Typography sx={{ color: '#3A3A49', fontWeight: '400', fontSize: 16, textAlign: 'start' }} >
                    위의 버튼을 눌러 새 데이터베이스를 생성하거나, 기존의 데이터베이스와 연결하세요.
                </Typography>
            </Box>

            <Grid container sx={{paddingBottom:10,backgroundColor:'#FFFFFF',borderRadius:5,}}>
                <Grid item lg={4}>
                    <div style={{ color: '#25282B', fontWeight: '700', fontSize: 16,paddingBottom:10 }}>Basic Information</div>
                    <Grid container>
                        <Grid item lg={6}>
                            <div style={{ color: '#25282B', fontWeight: '500', fontSize: 16 }}>Database Type</div>
                        </Grid>
                        <Grid item lg={6}>
                            <div style={{ color: '#52575C', fontWeight: '500', fontSize: 16 }}>Blazegraph</div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={8}>
                    <div style={{ color: '#25282B', fontWeight: '700', fontSize: 16,paddingBottom:10 }}>Additional Information</div>
                    <Grid container>
                        <Grid item lg={3}>
                            <div style={{ color: '#25282B', fontWeight: '700', fontSize: 16 }}>runningQueriesCount</div>
                        </Grid>
                        <Grid item lg={3}>
                            <div style={{ color: '#52575C', fontWeight: '500', fontSize: 16 }}>0</div>
                        </Grid>
                        <Grid item lg={3}>
                            <div style={{ color: '#25282B', fontWeight: '700', fontSize: 16 }}>operatorTasksPerQuery</div>
                        </Grid>
                        <Grid item lg={3}>
                            <div style={{ color: '#52575C', fontWeight: '500', fontSize: 16 }}>5302.2371</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", }}>
                <Grid item>
                    <Typography variant='h6' color={'#25282B'} sx={{ fontWeight: '600' }}>Repository</Typography>
                </Grid>
                <Grid item>
                    <NestedModal />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainScreen
