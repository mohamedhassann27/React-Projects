import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './global/AppBar';
import AppSide from './global/AppSide';
import AppMain from './components/AppMain';
import { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';


function Home() {
    const [open, setOpen] = useState(false);
    
    // const [loading, setLoading]= useState(true)

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 500);
    // },[])


    // if(loading){
    //     return(
    //         <div style={{display:'flex', alignItems:"center", justifyContent:'center', flexDirection:'column', gap:'1rem',height:'100vh'}}>
    //             <CircularProgress/>
    //             <Typography variant='h4' color='primary'>Loading...</Typography>
    //         </div>
    //     )
    // }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Appbar setOpen={setOpen} open={open}/>

            <AppSide setOpen={setOpen} open={open}/>

            <AppMain/>

        </Box>
    );
}

export default Home