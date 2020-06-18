import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../images/coffeone.jpeg'

const useStyles = makeStyles((theme) => ({
  secondpromotion: {
    backgroundColor: '#546e7a',
    width: '100%',
    height: 400,
  },
  secondtitle: {
    margin: 0,
    color: '#eceff1',
    paddingTop: 30,
    paddingLeft: 40,
  },
  secondtext: {
    textAlign: 'center',
    padding: 20,
  },
  circle: {
    backgroundImage: `url(${Background})`,
    width: 130,
    height: 130,
    borderRadius: 130,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    
  }
}));


export default function SecondPromotion(){
  const classes = useStyles();  
  
  return(
    <div className={classes.secondpromotion}>
      <h1 className={classes.secondtitle}>Comments</h1>
      <p className={classes.secondtext}>Are you new to milk steaming or are struggling with milk steaming to create the perfect micro foam? Steaming milk with seem hard at the start but milk steaming is easy and simple once you master few basic tips. Here are our tips how to steam the perfect milk and create microfoam.      </p>
      <div className={classes.circle}>
        
      </div>
    </div>
  );
}
