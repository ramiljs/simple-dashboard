import React from "react";
import "./style.css";
import admin from "../../assets/images/admin.jpg";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { sidebarMainLinks } from "../../constants/sidebar-links";
import {
  Box,
  List,
  Stack,
  Avatar,
  Drawer,
  ListItem,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

function HomeDrawer() {
  return (
    <Box>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}
          direction="column"
          spacing={0}
        >
          <Avatar
            sx={{ width: '55px', height: '55px', borderRadius: '10px' }}
            src={admin}
            alt="Admin Sale"
          />
          <ListItemIcon sx={{ marginTop: '-45px', columnGap: '70px' }}>
            <IconButton>
              <SettingsOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <NotificationsNoneOutlinedIcon fontSize="small" />
            </IconButton>
          </ListItemIcon>
          <Typography noWrap component="div" variant="h6" sx={{ marginTop: '10px' }}> John Doe </Typography>
          <Typography noWrap component="div" sx={{ fontSize: '12px' }}> +998 (99) 123 10 11 </Typography>
          <ListItem button style={{ display: 'inline', backgroundColor: '#dcedc8' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}> Wallet balance </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}> $4238 </Typography>
          </ListItem>
          <IconButton style={{ margin: '-50px 0 0 160px' }}>
            <CurrencyExchangeOutlinedIcon style={{ fontSize: '25px' }} />
          </IconButton>
        </Stack>
        <List>
          {sidebarMainLinks.map(({label, icon}) => (
            <ListItem button key={label}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default HomeDrawer;