import { Button, Paper, Stack, Typography } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "./Row1/Row1";
import Row3 from "./Row3/Row3";
import Row2 from "./Row2/Row2";

function Dashboard() {
    return (
        <Stack sx={{ gap: 2 }}>
            
            <Stack direction={'row'} style={{ justifyContent:'space-between' }}>
                <div>
                    <Typography variant="h5" color="primary" fontWeight='500' textTransform={'uppercase'}>dashboard</Typography>
                    <Typography>Welcome to your dashboard</Typography>
                </div>
                <Button variant="contained" style={{height:'2.7rem'}}>
                    <DownloadOutlined /> Download Roports
                </Button>
            </Stack>

            <Row1 />

            <Row2/>

            <Row3 />
        
        </Stack>
    );
}

export default Dashboard;
