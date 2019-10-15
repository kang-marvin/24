import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as statusActions from "../../redux/actions/apiStatus/apiStatusActions";

class APIStatus extends React.Component {

  componentDidMount() {
    this.props.actions.apiStatus();
  }
  render() {
    const { message } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <p>
            {message}
          </p>
        </div>
      </div>
    );
  }
}

APIStatus.propTypes = {
  message: PropTypes.string,
};

/**
 * Remove underscore (_) to use ownProps.
 */
const mapStateToProps = (state, _ownProps) => {
  return {
    message: state.apiStatus.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(statusActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APIStatus);
