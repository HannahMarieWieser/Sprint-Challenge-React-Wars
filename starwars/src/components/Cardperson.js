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

function SimpleCard(props) {
  console.log("simplecard props", props)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>

        <CardContent>

            <Typography variant="h5" component="h2">
            {props.tileData.name}
            </Typography>

            <Typography ariant="body2" component="p">
            Stats:
            <br/>
            Born: {props.tileData.birth_year} {bull} Gender: {props.tileData.gender}
            <br/>
            Height: {props.tileData.height} {bull} Mass: {props.tileData.mass} {bull} Eyecolor: {props.tileData.eye_color}
            </Typography>


            <Typography variant="body2" component="p">
            Origin:
            <br/>
            Species: {props.tileData.species}
            <br />
            Homeworld: {props.tileData.homeworld}
            </Typography>

        </CardContent>
      
      
    </Card>
  );
}
export default SimpleCard;