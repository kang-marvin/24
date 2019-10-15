import React from "react";

class ErrorComponent extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p className="no-data-available">
            Error has occured. Try again later
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorComponent;
