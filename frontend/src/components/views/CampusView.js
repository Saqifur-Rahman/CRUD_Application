import Base from "./Base";
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

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
  image2: {
    width: 64,
    height: 64,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));


export default function CampusView(props) {
    const classes = useStyles();  
    const {campus} = props;
    const {deleteCampus} = props;
    const {editStudent} = props
    const {allStudents} = props
    const history = useHistory()

    var [addStudent, setAddStudent] = useState(null)

    function delCampus(e) {
        e.preventDefault();
        deleteCampus(campus.id);
        alert("Campus deleted successfully!");
        history.push("/campuses")
    }

    function removeStudent(e, s) {
        e.preventDefault();
        const remove_student = {
            "id": s.id,
            "campusId": null
        }
        editStudent(remove_student)
        alert("Student removed successfully!")
        window.location.reload()
    }

    function addStudentInCampus(e) {
        e.preventDefault()
        const add_student = {
            "id": addStudent,
            "campusId": campus.id
        }
        editStudent(add_student)
        alert("Student added successfully!")
        window.location.reload()
    }

    return (
      <div>  
        <Base/>
        {/* Student Info */}
        <div className={classes.root}>
            <Paper className={classes.paper} style={{marginTop: 20}}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={`${campus.imageUrl}`} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {campus.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <b>{campus.address}</b>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <b>{campus.description}</b>
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Button size="small" variant="contained" color="primary" style={{marginRight: 5}}>
                            <Link to={`/campus/${campus.id}/edit`} style={{ textDecoration: 'none', color: 'white' }}>
                                Edit
                            </Link>
                        </Button>
                        <Button size="small" variant="contained" color="secondary" onClick={delCampus} >
                            Delete
                        </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">ID: {campus.id}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h2" style={{ textAlign: 'center', marginTop: 30 }}>
                STUDENTS ON CAMPUS
            </Typography>

            <div>
                <FormControl variant="filled" style={{ width: '50%', marginBottom: 10, marginLeft:'25%' }}>
                    <InputLabel htmlFor="filled-age-native-simple">Students</InputLabel>
                    <Select
                    native
                    value={addStudent}
                    onChange = {(e) => setAddStudent(e.target.value)}
                    inputProps={{
                        name: 'student',
                        id: 'filled-campus-native-simple',
                    }}
                    >
                    <option aria-label="None" value={null}></option>
                    {allStudents.map(s => (
                        <option value={s.id}>{s.firstName} { s.lastName}</option>
                    ))}
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '40%' }} disableElevation
                    onClick = {(e) => addStudentInCampus(e)}
                >
                    Add Student
                </Button>
            </div>

            {campus.students.map((student) => (
              <div>
                  <Paper className={classes.paper2} style={{marginTop: 20}}>
                      <Grid container spacing={2} >
                          <Grid item>
                          <ButtonBase className={classes.image2}>
                              <img className={classes.img} alt="complex" src={`${student.imageUrl}`} />
                          </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2} >
                      <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                          <Link to={`/student/${student.id}`} style={{ textDecoration: 'none' }}>
                              {student.firstName} { student.lastName}
                          </Link>
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                              <b>{(student.gpa <= 0.0) ? "NA" : student.gpa}</b>
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                              <b>{student.email}</b>
                          </Typography>
                      </Grid>
                      
                  </Grid>
                  <Grid item >
                      <Typography variant="subtitle1">ID: {student.id}</Typography>
                      <Button size="small" variant="contained" color="secondary" style={{marginTop: 15}}
                        onClick={(e) => removeStudent(e, student)}
                      >
                            Delete
                        </Button>
                  </Grid>
              </Grid>
          </Grid>
                  </Paper>
              </div>
            ))}

        {campus.students.length === 0 ? <p style={{textAlign: 'center'}}>There are currently no students registered to this campus.</p> : ""}

                        
        </Paper>
    </div>

      </div>
    );
  
  };
  