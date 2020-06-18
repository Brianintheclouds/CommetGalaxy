import React from 'react';
import { positions } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BackgroundTwo from '../images/grano.jpg';

const useStyles = makeStyles((theme) => ({
  thirdpromotion: {
    width: '100%',
    height: 700,
    backgroundColor: '#455a64',
  },
  square: {
    position: 'relative',
    top: 160,
    paddingTop: 30,
    width: '100%', 
    height: 300,
    backgroundColor: '#eceff1',	  
    backgroundImage: `url(${BackgroundTwo})`,
  },
 
}));

export default function ThirdPromotion(){
  const classes = useStyles();
  
   
  return(
     <div className={classes.thirdpromotion}>
       <div className={classes.square}>
       </div>
     </div>
  );
}
