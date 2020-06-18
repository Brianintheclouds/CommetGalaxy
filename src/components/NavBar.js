import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material/react-icon-button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#78909c',
    width: '100%',
    height: 50,
  },
  appbar: {
    textAlign: 'right',
  },
  fbbtn: {
   margin: 7, 
  },
}));

export default function Navbar() {
const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.appbar}>
        <IconButton className={classes.fbbtn}>
          <FacebookIcon />
        </IconButton>  
        <IconButton>	 
          <InstagramIcon />
        </IconButton>
      </div>
    </div>
  );
}
