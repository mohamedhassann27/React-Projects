import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function AppMain() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <DrawerHeader />

        <Outlet/>
      </Box>
  )
}

export default AppMain
