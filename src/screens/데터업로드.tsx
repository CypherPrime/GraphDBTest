import { Grid } from '@mui/material'
import fileImage from '../assets/file.png'
import DataTable from '../components/Table'


function ThirdItemOnDrawer() {
  return (
    <div>
      <Grid container sx={{backgroundColor:'#FFFFFF',height:134,width:513, borderRadius:8,border:1,gap:2,alignItems:'center'}}>
        <Grid item>
            <img src={fileImage}  style={{width:60,height:60}}/>
        </Grid>
        <Grid item sx={{alignItems:'start'}}>
            <div style={{color:'#373F41',fontWeight:'700',fontSize:20,textAlign:'start'}}>File Upload</div>
            <div style={{color:'#373F41',fontWeight:'400',fontSize:16,textAlign:'start'}}>rdf/xml, ttl, ntriples, json-ld의 파일 형식을 </div>
            <div style={{color:'#373F41',fontWeight:'400',fontSize:16,textAlign:'start'}}>지원하고, 여러 파일의 선택이 가능합니다</div>
        </Grid>
      </Grid>

      <div style={{marginTop:50}}>
      <DataTable/>
      </div>
    </div>
  )
}

export default ThirdItemOnDrawer
