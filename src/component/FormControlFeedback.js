import React from "react";

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
  error: React.PropTypes.instanceOf(Error),
  warning: React.PropTypes.instanceOf(Error)
};
