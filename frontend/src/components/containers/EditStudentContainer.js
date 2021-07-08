import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks"

import { EditStudentView } from '../views'

class EditStudentContainer extends Component {
    componentDidMount() {
        // getting student ID from url
        this.props.fetchStudent(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <EditStudentView
                    student={this.props.student}
                    editStudent={this.props.editStudent}
                />
            </div>
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
      editStudent: (student) => dispatch(editStudentThunk(student)),
    }
  }

EditStudentContainer.propTypes = {
  editStudent: PropTypes.func.isRequired,
  fetchStudent: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
}

export default connect(mapState, mapDispatch)(EditStudentContainer)