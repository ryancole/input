import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Input from "./Input";
import FormControlFeedback from "./FormControlFeedback";

export default class InputGroup extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password"]),
    error: PropTypes.instanceOf(Error),
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    warning: PropTypes.instanceOf(Error),
    onChange: PropTypes.func.isRequired,
    dangerClass: PropTypes.string,
    warningClass: PropTypes.string
  };

  static defaultProps = {
    type: "text",
    dangerClass: "has-danger",
    warningClass: "has-warning"
  };

  get classnames() {
    const { dangerClass, warningClass } = this.props;
    return classnames({
      "form-group": true,
      [dangerClass]: this.props.error,
      [warningClass]: this.props.warning
    });
  }

  render() {
    const { name, type, label, value, error, warning, onChange } = this.props;
    return (
      <div className={this.classnames}>
        <label htmlFor={name}>
          {label}
        </label>
        <Input
          name={name}
          type={type}
          error={error}
          value={value}
          warning={warning}
          onChange={onChange}
        />
        <FormControlFeedback error={error} warning={warning} />
      </div>
    );
  }
}
