import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


//importing DrawerItems
import HomeD from '../DrawerItems/HomeD'
import AddProducts from '../DrawerItems/AddProducts'
import Available from '../DrawerItems/Available'
import Customers from '../DrawerItems/Customers'
import Feedback from '../DrawerItems/Feedback'
import Deals from '../DrawerItems/Deals'
import Setting from '../DrawerItems/Setting'


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop:'30px',
    
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop:'100px',
  color:'#000000',
  background:'#ffff00',
  
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  
  
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('Home');
 

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [categories, setCategories] = useState([]);


  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop:'100px'
          
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
       <DrawerHeader style={{ backgroundColor: '#ffcc66' }}>
          <IconButton onClick={handleDrawerClose} style={{color:'black'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
       </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Add Products', 'Available', 'Customers'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton 
              sx={{
                '&:hover': {
                  backgroundColor: '#ffff00', // Yellow hover color
                },
              }}
              onClick={() => handleItemClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Feedback', 'Deals', 'Setting'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton 
              sx={{
                '&:hover': {
                  backgroundColor: '#ffff00', // Yellow hover color
                },
              }}
              onClick={() => handleItemClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {selectedItem === 'Home' && (
         <HomeD/>
        )}
        {selectedItem === 'Add Products' && (
          <AddProducts categories={categories} setCategories={setCategories}/>
        )}
        {selectedItem === 'Available' && (
          <Available categories={categories}/>
        )}
        {selectedItem === 'Customers' && (
          <Customers/>
        )}
        {selectedItem === 'Feedback' && (
          <Feedback/>
        )}
         {selectedItem === 'Deals' && (
          <Deals/>
        )}
         {selectedItem === 'Setting' && (
          <Setting/>
        )}

        
      </Main>
    </Box>
  );
}
