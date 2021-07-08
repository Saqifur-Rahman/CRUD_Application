import { useState } from 'react'
import Base from "./Base";
import { useHistory } from 'react-router-dom'
// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function EditCampusView(props) {

    const {campus} = props
    const {editCampus} = props
    const history = useHistory()

    var [id] = useState(campus.id)
    var [name, setName] = useState(campus.name)
    var [address, setAddress] = useState(campus.address)
    var [description, setDescription] = useState(campus.description)
    var [imageUrl, setImageUrl] = useState(campus.imageUrl)
    var [students, setStudents] = useState(campus.students)


    
    function oneditCampus(e) {
        e.preventDefault()

        if(name === "" || address === "" || description === "") {
            return alert("First Name, Last Name and Description Fields are compulsory!")
        }

        if(imageUrl === "") {
            imageUrl = "https://www.kindpng.com/picc/m/50-504348_graduation-ceremony-square-academic-cap-silhouette-silhouette-student.png"
        }
        
        const postStudent = {
            id,
            name,
            address,
            description,
            imageUrl,
            students
        }
        

        editCampus(postStudent)
        alert("Changes made successfully!")
        history.push(`/campus/${campus.id}`)
    }

    return (
        <div>
            <Base />
            <h1 style={{ textAlign: 'center' }}>Edit Campus</h1>

          <form 
            style={{ margin: 'auto', width: '30%' }}
            onSubmit={oneditCampus}
          >
            <TextField 
              id="name" label="First Name" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {name} onChange = {(e) => setName(e.target.value)}
            /> <br />
            <TextField 
              id="address" label="Last Name" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {address} onChange = {(e) => setAddress(e.target.value)}
            /> <br />
            <TextField 
              id="description" label="Description" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {description} onChange = {(e) => setDescription(e.target.value)}
            /> <br />
            <TextField 
              id="imageUrl" label="Image URL" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)}
            /> <br />
            
            <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '35%' }} disableElevation>
              Save Changes
            </Button>
          </form>
        </div>
    )
}