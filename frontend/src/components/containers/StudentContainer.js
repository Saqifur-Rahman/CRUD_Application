import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { fetchStudentThunk, deleteStudentThunk } from "../../store/thunks"

import { StudentView } from '../views'

class StudentContainer extends Component {
  componentDidMount() {
    // getting student ID from url
    this.props.fetchStudent(this.props.match.params.id)
  }
 
  render() {
      return (
        <StudentView
          student={this.props.student}
          deleteStudent={this.props.deleteStudent}
        />
      )
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  }
}

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  }
}
StudentContainer.propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
}

export default connect(mapState, mapDispatch)(StudentContainer)