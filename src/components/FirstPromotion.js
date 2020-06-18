import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  firstcontainer: {
    backgroundColor: '#607d8b',
    width: '100%',
    height: 300,
  },
  firsttitle: {
    margin: 0,
    textAlign: 'right',
    paddingRight: 20,
    paddingTop: 50,
  },
  firsttext: {
    textAlign: 'left',
    width: '60%',
    paddingLeft: 20,
  },
}));

export default function FirstPromotion(){
  const classes = useStyles();
  
  return(
    <div className={classes.firstcontainer}>
      <div>
        <h1 className={classes.firsttitle}>Coffe Shop</h1>
        <p className={classes.firsttext}> Coffee and chocolate are often compared thanks to the overlap between their growing regions and the similarities in flavor notes.  Both coffee and cacao share a huge flavor profile; over 600 aromatic compounds in cacao and more than 1000 in coffee! Let’s dig into more similarities and differences between the two gorgeous plants!</p>
      </div>
    </div>
  );
}
