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
import { projRoutes } from '../../../ProjRoutes';

const drawerWidth = 200;

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
        {Object.keys(projRoutes).map((key) => {
          if (key === 'Home') return null;
          return (
            <ListItem
              key={key}
              onClick={() => navigate(projRoutes[key].path.substring(1))}
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
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
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
        display: { xs: 'block', sm: 'none' },
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
        display: { xs: 'none', sm: 'block' },
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
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            width: { sm: `calc(100% - ${drawerWidth}px)` },
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
