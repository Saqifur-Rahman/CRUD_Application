import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { fetchCampusThunk, editCampusThunk, fetchAllStudentsThunk } from "../../store/thunks"

import { EditCampusView } from '../views'

class EditCampusContainer extends Component {
    componentDidMount() {
        // getting student ID from url
        this.props.fetchCampus(this.props.match.params.id)
        this.props.fetchAllStudents()
    }

    render() {
        return (
            <div>
                <EditCampusView
                    campus={this.props.campus}
                    editCampus={this.props.editCampus}
                    allStudents={this.props.allStudents}
                />
            </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      campus: state.campus,
      allStudents: state.allStudents
    }
  }
  
  // map dispatch to props
  const mapDispatch = (dispatch) => {
    return {
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
      fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
    }
  }

EditCampusContainer.propTypes = {
  editCampus: PropTypes.func.isRequired,
  fetchCampus: PropTypes.func.isRequired,
  campus: PropTypes.object.isRequired,
  fetchAllStudentsThunk: PropTypes.func.isRequired
}

export default connect(mapState, mapDispatch)(EditCampusContainer)