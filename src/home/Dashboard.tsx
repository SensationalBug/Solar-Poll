import UsersTable from '../components/UsersTable';
import { Grid, CssBaseline, Box } from '@mui/material'
import { AppBarComponent } from '../components/AppBar';

export default function Dashboard() {
  return (
    <Box sx={{ display: { md: 'flex', xs: 'unset' } }}>
      <CssBaseline />
      <AppBarComponent />
      <Grid
        sx={{
          flexGrow: 1,
          paddingTop: 10,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          // alignItems: { xs: 'start', md: 'center' },
          backgroundColor: (theme) => theme.palette.grey[300],
        }}
      >
        <UsersTable />
      </Grid>
    </Box >
  );
}

