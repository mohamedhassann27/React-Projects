import { DataGrid } from '@mui/x-data-grid';
import {rows, columns} from "./data"
import { Typography } from '@mui/material';

function Team() {
  return (
    <div>
      <div style={{marginBottom:'1.5rem'}}>
        <Typography variant="h5" color="primary" fontWeight='500' textTransform={'uppercase'}>TEAM</Typography>
        <Typography>Managing the Team Members</Typography>
      </div>

        <DataGrid rows={rows} columns={columns}/>
    </div>
  );
}
export default Team