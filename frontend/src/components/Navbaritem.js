import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


function Navbaritem(props){
    return (
        <ListItem key={props.text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.openStatus ? 'initial' : 'center',
            px: 2.5,
            "&:hover": {
              color: "green !important",
              cursor: "default"
              }
          }}
          
          component={Link} to={props.navpath}
          >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.openStatus ? 3 : 'auto',
              justifyContent: 'center',
              color: '#8A8B8C',
            }}
          >

            
            {props.children}
          </ListItemIcon>
          <ListItemText primary={props.text} sx={{ opacity: props.openStatus ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    );
}

export default Navbaritem;