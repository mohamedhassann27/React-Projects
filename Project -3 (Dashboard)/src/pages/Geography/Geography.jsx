import { Typography } from "@mui/material"
import Geo from "./Geo"



function Geography() {
    return (
        <div >

            <div style={{marginBottom:'1.5rem'}}>
                <Typography variant="h5" color="primary" fontWeight='500' textTransform={'capitalize'}>geography</Typography>
                <Typography>Simple geography Chart</Typography>
            </div>
            
            <div style={{ height:'70vh', border:"1px solid gray", borderRadius:"5px"}}>
                <Geo />
            </div>

        </div>
    )
}

export default Geography
