import { useState } from 'react'
import { useHistory } from "react-router-dom";
import Base from "./Base";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddCampusView(props) {

  const {addCampus} = props

  var [name, setName] = useState('')
  var [address, setAddress] = useState('')
  var [description, setDescription] = useState('')
  var [imageUrl, setImageUrl] = useState('')

  const history = useHistory()

  function onAddCampus(e) {
    e.preventDefault()

    if(name === "" || address === "" || description === "") {
      return alert("Name, Address and Description Fields are compulsory!")
    }

    if(imageUrl === "") {
      imageUrl = "https://lh3.googleusercontent.com/proxy/j6AkPKSerSaRYJLlQ3UERbwb1KB-RUeQz-eYJfB2hP7HZkZvr0j4EYvFiElxmPdStzO1oE_PxXeiqvSROFCjSQ_EZr9ldRWeHEEs42zEqB9eA6bSJdA18tvn1BGh7CKaKNIGAOYDw7vmMY7CGnxQSYvszl6TzWc"
    }

    const postCampus = {
      name,
      imageUrl,
      address,
      description,
    }

    addCampus(postCampus)
    alert("Campus Successfully Added!")
    history.push("/campuses")
  }

  return (
    <div>
        <Base />
        <div>
          <h1 style={{ textAlign: 'center' }}>Add Student</h1>

          <form 
            style={{ margin: 'auto', width: '30%' }}
            onSubmit = {onAddCampus}
          >
            <TextField 
              id="name" label="Campus Name" variant="filled" style={{ width: '100%', marginBottom: 10 }}
              value = {name} onChange = {(e) => setName(e.target.value)}
            /> <br />
            <TextField 
              id="address" label="Address" variant="filled" style={{ width: '100%', marginBottom: 10 }}
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
              Add Campus
            </Button>
          </form>
        </div>
    </div>
  );
}