import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

require("dotenv").config();

const App = props => {

  const { children } = props;

  return (
    <BrowserRouter>
      <div>
        <div className="sticky-top">
          {/* Add Header Component here */}
          <p>Header Component</p>
        </div>
        <div className="container-fluid">
          {children}
        </div>
        {/* Add Footer Component here  */}
        <p>Footer Component</p>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
