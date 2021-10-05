import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import Link from '@mui/material/Link';
import { padding } from '@mui/system';



const item = {
  py: '15px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
  py: 1.5,
  px: 3,
};

const itemHead = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 4,
    px: 3,
  };

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemHead, fontSize: 22, color: '#fff' }}>
          React App
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          
          <ListItemIcon>
            <Link href='/' underline="none" sx={{color:'#fff'}} >
                <HomeIcon />
            </Link>
          </ListItemIcon>
          <ListItemText><Link href='/' underline="none" sx={{color:'#fff'}} >Warehouses</Link></ListItemText>
         
        </ListItem>
      </List>
    </Drawer>
  );
}