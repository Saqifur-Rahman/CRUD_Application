import { useState } from 'react'
import Base from "./Base";
import { useHistory } from 'react-router-dom'
// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function EditStudentView(props) {
    const classes = useStyles();

    const {student} = props
    const {allCampuses} = props
    const {editStudent} = props
    const history = useHistory()

    var [id] = useState(student.id)
    var [firstName, setFirstName] = useState(student.firstName)
    var [lastName, setLastName] = useState(student.lastName)
    var [email, setEmail] = useState(student.email)
    var [gpa, setGpa] = useState(student.gpa)
    var [imageUrl, setImageUrl] = useState(student.imageUrl)
    var [campusId, setCampusId] = useState(student.campus ? student.campus.id : "")


    
    function onEditStudent(e) {
        e.preventDefault()

        if(firstName === "" || lastName === "" || email === "") {
            return alert("First Name, Last Name and Email ID Fields are compulsory!")
        }

        if(gpa <= 0.0 || gpa === "") {
            gpa = 0.0
        }

        if(imageUrl === "") {
            imageUrl = "https://www.kindpng.com/picc/m/50-504348_graduation-ceremony-square-academic-cap-silhouette-silhouette-student.png"
        }
        
        const postStudent = {
            id,
            firstName,
            lastName,
            email,
            gpa,
            imageUrl,
            campusId
        }
        

        editStudent(postStudent)
        alert("Changes made successfully!")
        history.push(`/student/${student.id}`)
    }

    return (
        <div>
            <Base />
            <h1 style={{ textAlign: 'center' }}>Edit Student</h1>

          <form 
            style={{ margin: 'auto', width: '30%' }}
            onSubmit={onEditStudent}
          >
            <TextField 
              id="firstName" label="First Name" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {firstName} onChange = {(e) => setFirstName(e.target.value)}
            /> <br />
            <TextField 
              id="lastName" label="Last Name" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {lastName} onChange = {(e) => setLastName(e.target.value)}
            /> <br />
            <TextField 
              id="email" label="Email ID" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {email} onChange = {(e) => setEmail(e.target.value)}
            /> <br />
            <TextField 
              id="gpa" label="GPA" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {gpa} onChange = {(e) => setGpa(e.target.value)}
            /> <br />
            <TextField 
              id="imageUrl" label="Image URL" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)}
            /> <br />
            <FormControl variant="filled" className={classes.formControl} style={{ width: '100%', marginBottom: 10 }}>
                <InputLabel htmlFor="filled-age-native-simple">Campus</InputLabel>
                <Select
                native
                value={campusId}
                onChange = {(e) => setCampusId(e.target.value)}
                inputProps={{
                    name: 'campus',
                    id: 'filled-campus-native-simple',
                }}
                >
                <option aria-label="None" value={null}></option>
                {props.allCampuses.map(campus => (
                    <option value={campus.id}>{campus.name}</option>
                ))}
                </Select>
            </FormControl> <br />
            <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '35%' }} disableElevation>
              Save Changes
            </Button>
          </form>
        </div>
    )
}