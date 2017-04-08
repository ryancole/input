import React from "react";
import PropTypes from "prop-types";

export default function FormControlFeedback({ error, warning }) {
  if (error) {
    return (
      <div className="form-control-feedback">
        {error.message}
      </div>
    );
  } else if (warning) {
    return (
      <div className="form-control-feedback">
        {warning.message}
      </div>
    );
  } else {
    return null;
  }
}

FormControlFeedback.propTypes = {
  error: PropTypes.instanceOf(Error),
  warning: PropTypes.instanceOf(Error)
};
