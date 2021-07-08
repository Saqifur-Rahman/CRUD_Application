import React, { Component } from 'react';
import { connect } from "react-redux"
import { addCampusThunk } from "../../store/thunks"
import { AddCampusView } from "../views"

class AddCampusContainer extends Component {

    render() {
        return (
            <div>
                <AddCampusView 
                    campus={this.props.campus}
                    addCampus={this.props.addCampus}
                />
            </div>
        )
    }
}

// map state to propTypes
const mapState = (state) => {
    return {
        campus: state.campus
    }
}

// map dispatch to propTypes
const mapDispatch = (dispatch) => {
    return {
        addCampus: (campus) => dispatch(addCampusThunk(campus))
    }
}

export default connect(mapState, mapDispatch)(AddCampusContainer)