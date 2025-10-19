import { Typography } from "@mui/material";
import Line from "./Line";


function LineChart() {
    return (
        <div style={{ height: "75vh" }}>

            <div style={{marginBottom:'1.5rem'}}>
                <Typography variant="h5" color="primary" fontWeight='500' textTransform={'capitalize'}>line chart</Typography>
                <Typography>Simple Line Chart</Typography>
            </div>

            <Line/>
        </div>
    );
}

export default LineChart;
