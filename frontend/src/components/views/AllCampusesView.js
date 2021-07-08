import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Base from "./Base";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  media: {
    height: 175,
  },
});

const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return <div><Base/><h1 style={{ marginLeft: 20 }}>There are no campuses.</h1></div>;
  }

  

  return (
    <div>
      <Base/>
      <h1 style={{ marginLeft: 20 }}>
        All Campuses
        <Button variant="contained" color="primary" style={{ float: 'right', marginRight: 20 }}>
          <Link to='/campuses/add' style={{ textDecoration: 'none', color: 'white' }}>
            Add
          </Link>
        </Button>  
      </h1>
      <Grid container spacing={3} style={{ margin: 10 }}>
      {props.allCampuses.map((campus) => (
      <Grid item xs={3}>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${campus.imageUrl}`}
              title="Campus Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Link to={`/campus/${campus.id}`} style={{ textDecoration: 'none' }}>
                  {campus.name}
                </Link>
              </Typography>
              <Typography variant="body4" color="textSecondary" component="p">
                <b>{campus.address}</b>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 5 }}>
                {campus.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      ))}
        </Grid>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;