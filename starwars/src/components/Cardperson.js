import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard({name,birth_year,gender,skin_color,height,mass,eyecolor,homeworld,species, starships, vehicles}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}

        <Typography variant="h5" component="h2">
          {name}
        </Typography>

        <Typography ariant="body2" component="p">
          Stats:
          <br/>
          {birth_year}{bull}{gender}{bull}{skin_color}
          <br/>
          {height}{bull}{mass}{bull}{eyecolor}
        </Typography>


        <Typography variant="body2" component="p">
           Origin:
           <br/>
          {species}
          <br />
          {homeworld}
        </Typography>

        <Typography variant="body2" component="p">
          Vehicles:
          <br />
          {starships}
          <br />
          {vehicles}
        </Typography>


      </CardContent>

      
    </Card>
  );
}
export default SimpleCard;