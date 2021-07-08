import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import Base from "./Base";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addStudentThunk } from "../../store/thunks";

export default function AddStudentView() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  var [gpa, setGpa] = useState('')
  var [imageUrl, setImageUrl] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  function onAddStudent(e) {
    e.preventDefault()

    if(firstName === "" || lastName === "" || email === "") {
      return alert("First Name, Last Name and Email ID Fields are compulsory!")
    }

    if(gpa === 0.0 || gpa === "") {
      gpa = 0.0
    }

    if(imageUrl === "") {
      imageUrl = "https://www.kindpng.com/picc/m/50-504348_graduation-ceremony-square-academic-cap-silhouette-silhouette-student.png"
    }
    // https://eu2025.files.wordpress.com/2013/05/christian-franz-e1368792110185.jpg
    const postStudent = {
      firstName,
      lastName,
      email,
      gpa,
      imageUrl
    }

    dispatch(addStudentThunk(postStudent))
    alert("Student Successfully Added!")
    history.push("/students")
  }

  return (
    <div>
        <Base />
        <div>
          <h1 style={{ textAlign: 'center' }}>Add Student</h1>

          <form 
            style={{ margin: 'auto', width: '30%' }}
            onSubmit = {onAddStudent}
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
            <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '35%' }} disableElevation>
              Add Student
            </Button>
          </form>
        </div>
    </div>
  );
}