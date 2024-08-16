import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
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
import { Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ShareIcon from '@mui/icons-material/Share';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LayersIcon from '@mui/icons-material/Layers';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MainScreen from './MainScreen';
import ThirdItemOnDrawer from './데터업로드';
const options = [
  'None',
  'Atria',
];

const ITEM_HEIGHT = 48;
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerList = [
  {
    name: '데이터',
    icon: <SettingsIcon />
  },
  {
    name: '데이터 업로드',
    icon: <SettingsIcon />
  },
  {
    name: 'Namespace',
    icon: <LibraryBooksIcon />
  },
  {
    name: 'SPARQL',
    icon: <EmojiObjectsIcon />
  },
  {
    name: '통계',
    icon: <EqualizerIcon />
  },
  {
    name: '그래프 탐색',
    icon: <ShareIcon />
  },
  {
    name: '나의 프로세스',
    icon: <LayersIcon />
  },
]

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleListItemClick = (index: any) => {
    setSelectedIndex(index);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#FAFAFA' }} >
        <Toolbar>
          <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item sx={{ display: 'flex', flexDirection: 'row' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" color={'#252733'}>
                데이터
              </Typography>
            </Grid>
            <Grid item>
              <Grid container sx={{ alignItems: 'center', gap: 1 }}>
                <Grid item>
                  <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item>
                      <Typography noWrap component="div" color={'#252733'}> 한국어</Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={openDropdown ? 'long-menu' : undefined}
                        aria-expanded={openDropdown ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={openDropdown}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Divider orientation="vertical" variant="middle" flexItem sx={{ color: '#363740' }} />
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item>
                      <PersonIcon sx={{ color: '#252733' }} />
                    </Grid>
                    <Grid item color={'#252733'}>
                      username
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{ backgroundColor: '#363740' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: '#363740', height: '98vh' }}>
          {DrawerList.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => handleListItemClick(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: selectedIndex === index ? '#0000001A ' : 'transparent',
                  borderLeft: selectedIndex === index ? 5 : 0,
                  borderColor: selectedIndex == index ? '#DDE2FF' : null,
                  '&:hover': {
                    backgroundColor: '#C3CBCD ',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#9FA2B4'
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: selectedIndex === index ? '#fff' : '#A4A6B3',
                    '&:hover': {
                      color: '#9FA2B4',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{
        backgroundColor: '#FAFAFA',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: 3,
      }}>
        <DrawerHeader />
        {selectedIndex ===1 && (
          <>
            <MainScreen/>
          </>
        )}
        {selectedIndex ===2 && (
          <>
            <ThirdItemOnDrawer/>
          </>
        )}
        
      </Box>
    </Box>
  );
}
