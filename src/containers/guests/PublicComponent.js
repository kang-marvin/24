import React from "react";

class PublicComponent extends React.Component {
  render() {
    return (
      <div className="-card">
        <div className="-card-body">
          <p>
            This is a public component. (Non Logged user can view this)
          </p>
        </div>
      </div>
    );
  }
}

export default PublicComponent;
