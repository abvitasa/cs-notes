import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ProjBreadcrumbs from '../Breadcrumbs/ProjBreadcrumbs';
import { projData } from '../../../ProjData';

const drawerWidth = 240;

const ProjDrawer = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <Typography variant='h6'>
            <Box sx={{ fontWeight: 'bold', m: 0 }}>
              <span className='headline'>Sorting Algorithms</span>
            </Box>
          </Typography>
        </ListItem>

        {Object.keys(projData).map((key) => {
          if (key === 'Home') return null;
          return (
            <ListItem
              key={key}
              onClick={() => {
                navigate(projData[key].path.substring(1));
                handleDrawerToggle();
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={key} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const appBar = (
    <AppBar
      position='fixed'
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { lg: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <ProjBreadcrumbs />
      </Toolbar>
    </AppBar>
  );

  const drawerTemp = (
    <Drawer
      container={container}
      variant='temporary'
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'block',
          lg: 'none',
          xl: 'none',
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
    >
      <Typography variant='h5'>CS Notes</Typography>
      {drawer}
    </Drawer>
  );

  const drawerPerm = (
    <Drawer
      variant='permanent'
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
          xl: 'block',
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
      open
    >
      <Typography variant='h5'>CS Notes</Typography>
      {drawer}
    </Drawer>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {appBar}
        <Box
          component='nav'
          sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
          aria-label='mailbox folders'
        >
          {drawerTemp}
          {drawerPerm}
        </Box>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div>{children}</div>
        </Box>
      </Box>
    </>
  );
};

export default ProjDrawer;
