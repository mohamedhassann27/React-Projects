import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import {rows, columns} from "./data"

function Invoices() {
  return (
    <Box sx={{ height: 650, width: '100%' }}>

      <div style={{marginBottom:'1.5rem'}}>
        <Typography variant="h5" color="primary" fontWeight='500' textTransform={'uppercase'}>Invoices</Typography>
        <Typography>List of Invoice Balances</Typography>
      </div>

      <DataGrid
        showToolbar
        checkboxSelection
        slots={{
            toolbar: GridToolbar,
        }}
            rows={rows}
            columns={columns}
            sx={{ width: "100%", mx: "auto" }}
        >
      </DataGrid>
    </Box>
  )
}

export default Invoices
