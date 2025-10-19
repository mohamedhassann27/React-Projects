import { rows, columns } from "./data";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";

function Contacts() {

return (
    <Box sx={{ height: 650, width: '100%' }}>

        <div style={{marginBottom:'1.5rem'}}>
            <Typography variant="h5" color="primary" fontWeight='500' textTransform={'uppercase'}>Contacts</Typography>
            <Typography>List of Contacts for Future Reference</Typography>
        </div>

        <DataGrid
        showToolbar
        slots={{
            toolbar: GridToolbar,
        }}
            rows={rows}
            columns={columns}
            sx={{ width: "100%", mx: "auto" }}
        >
        </DataGrid>
    </Box>
);
}

export default Contacts;
