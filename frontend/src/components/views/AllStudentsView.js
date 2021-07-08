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
    height: 150,
    objectFit: 'cover'
  },
});

const AllStudentsView = (props) => {
  const classes = useStyles();
  if (!props.allStudents.length) {
    return <div><Base/><h1 style={{ marginLeft: 20 }}>There are no students.</h1></div>;
  }

  return (
    <div>
      <Base />
      <h1 style={{ marginLeft: 20 }}>
        All Students
        <Button variant="contained" color="primary" style={{ float: 'right', marginRight: 20 }}>
          <Link to='/students/add' style={{ textDecoration: 'none', color: 'white' }}>
            Add
          </Link>
        </Button>  
      </h1>
      <Grid container spacing={2} style={{ marginLeft: 10 }}>
      {props.allStudents.map((student) => (
      <Grid item xs={2}>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${student.imageUrl}`}
              title="student Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
                <Link to={`/student/${student.id}`} style={{ textDecoration: 'none' }}>
                  {student.firstName} {student.lastName}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 5 }}>
                {student.campus ? student.campus.name : 'NA'}
              </Typography>
              <Typography variant="body4" color="textSecondary" component="p">
                <b>{(student.gpa <= 0.0) ? "NA" : student.gpa}</b>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 5 }}>
                {student.email}
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

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;