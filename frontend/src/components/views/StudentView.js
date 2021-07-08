import Base from "./Base";
import { Link, useHistory } from 'react-router-dom'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '50%',
    },
    paper2: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '60%',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export default function StudentView(props) {
    const classes = useStyles();
  const {student} = props
  const {deleteStudent} = props
  const history = useHistory()

  function delStudent(e) {
      e.preventDefault()
      deleteStudent(student.id)
      alert("User Deleted Successfully")
      history.push("/students")
  }

  return (
    <div>
        <Base />

        {/* Student Info */}
        <div className={classes.root}>
            <Paper className={classes.paper} style={{marginTop: 20}}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={`${student.imageUrl}`} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {student.firstName} { student.lastName}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                CAMPUS: <b>{student.campus ? student.campus.name : 'NA'}</b>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                GPA: <b>{(student.gpa <= 0.0) ? "NA" : student.gpa}</b>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <b>{student.email}</b>
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Button size="small" variant="contained" color="primary" style={{marginRight: 5}}>
                            <Link to={`/student/${student.id}/edit`} style={{ textDecoration: 'none', color: 'white' }}>
                                Edit
                            </Link>
                        </Button>
                        <Button size="small" variant="contained" color="secondary" onClick={delStudent}>
                            Delete
                        </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">ID: {student.id}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h2" style={{ textAlign: 'center', marginTop: 30 }}>
                CAMPUS DETAILS
            </Typography>
            <b>{student.campus 
                ?
                <div>
                    <Paper className={classes.paper2} style={{marginTop: 20}}>
                        <Grid container spacing={2} >
                            <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={`${student.campus.imageUrl}`} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2} >
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                            <Link to={`/campus/${student.campus.id}`} style={{ textDecoration: 'none' }}>
                                {student.campus.name}
                            </Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <b>{student.campus.address}</b>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <b>{student.campus.description}</b>
                            </Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid item >
                        <Typography variant="subtitle1">ID: {student.campus.id}</Typography>
                    </Grid>
                </Grid>
            </Grid>
                    </Paper>
                </div>
                : 
                <p style={{textAlign: 'center'}}>This student is not registered to a campus.</p>}
            </b>
        </Paper>
    </div>

    
    </div>
  );
}