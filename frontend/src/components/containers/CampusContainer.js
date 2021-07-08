import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, deleteCampusThunk, editStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents()
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        deleteCampus={this.props.deleteCampus}
        editStudent={this.props.editStudent}
        allStudents={this.props.allStudents}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    allStudents: state.allStudents
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
};


export default connect(mapState, mapDispatch)(CampusContainer);