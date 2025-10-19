import { Box, Typography } from '@mui/material'
import Bar from './Bar'



function BarChart() {
    return (
        <Box sx={{height:"75vh"}}>

            <div>
                <Typography variant="h5" color="primary" fontWeight='500' textTransform={'capitalize'}>bar chart</Typography>
                <Typography>The minimum wage in Germany, France and Spain (EUR/month)</Typography>
            </div>

            <Bar/>
        </Box>
    )
}

export default BarChart
