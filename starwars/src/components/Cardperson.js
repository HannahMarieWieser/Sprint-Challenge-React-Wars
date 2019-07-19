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
    maxWidth: 150
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

function SimpleCard({tileData}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>

        <CardContent>

            <Typography variant="h5" component="h2">
            {tileData.name}
            </Typography>

            <Typography ariant="body2" component="p">
            Stats:
            <br/>
            Born: {tileData.birth_year} {bull} Gender: {tileData.gender}
            <br/>
            Height: {tileData.height} {bull} Mass: {tileData.mass} {bull} Eyecolor: {tileData.eye_color}
            </Typography>


            <Typography variant="body2" component="p">
            Origin:
            <br/>
            Species: {tileData.species}
            <br />
            Homeworld: {tileData.homeworld}
            </Typography>

        </CardContent>
      
      
    </Card>
  );
}
export default SimpleCard;