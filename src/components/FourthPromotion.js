import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BackgroundTwo from '../images/coffetwo.jpg';	
import BackgroundThree from '../images/coffeethree.jpg';

const useStyles = makeStyles((theme) => ({
  fourthpromotion: {
    width: '100%',
    height: 700,
    backgroundColor: '#263238',
  },
  box: {
    width: '50%',
      [theme.breakpoints.down('sm')]: {
       width: '100%',
    },
    height: 300,
    backgroundColor: '#81d4fa',
    backgroundImage: `url(${BackgroundTwo})`,
    backgroundSize: 'cover',
    display: 'inline-block',
    },
  textone: {
    width: '50%',
      [theme.breakpoints.down('sm')]: {
       width: '100%',
    },
    height: 300,
    backgroundColor: '#4fc3f7',
    backgroundImage: `url(${BackgroundThree})`,
    display: 'inline-block',
    },
  titleone: {
    margin: 0,
  }
}));






export default function FourthPromotion(){
  const classes = useStyles();
  
    return(
    <div className={classes.fourthpromotion}>
      <div className={classes.box}>
      </div>
      <div className={classes.textone}>
      </div>
    </div>
  );
}
