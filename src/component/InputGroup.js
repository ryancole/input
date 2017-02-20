import React from "react";
import classnames from "classnames";
import Input from "./Input";
import FormControlFeedback from "./FormControlFeedback";

export default class InputGroup extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(["text", "password"]),
    error: React.PropTypes.instanceOf(Error),
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    warning: React.PropTypes.instanceOf(Error),
    onChange: React.PropTypes.func.isRequired,
    dangerClass: React.PropTypes.string,
    warningClass: React.PropTypes.string
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
