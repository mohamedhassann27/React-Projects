import { Typography } from '@mui/material'
import Pie from './Pie'

function PieChart() {
    return (
        <div className="">

            <div style={{marginBottom:'1.5rem'}}>
                <Typography variant="h5" color="primary" fontWeight='500' textTransform={'capitalize'}>pie chart</Typography>
                <Typography>Simple Pie Chart</Typography>
            </div>

             {/* Parent elment must be specific hight  */}
            <div style={{height:"75vh"}}> 
                <Pie/>
            </div>

        </div>
    )
}

export default PieChart
