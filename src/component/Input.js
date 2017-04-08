import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Input extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password"]),
    error: PropTypes.instanceOf(Error),
    value: PropTypes.string.isRequired,
    warning: PropTypes.instanceOf(Error),
    onChange: PropTypes.func.isRequired,
    dangerClass: PropTypes.string,
    warningClass: PropTypes.string
  };

  static defaultProps = {
    type: "text",
    dangerClass: "form-control-danger",
    warningClass: "form-control-warning"
  };

  get classnames() {
    const { dangerClass, warningClass } = this.props;
    return classnames({
      "form-control": true,
      [dangerClass]: this.props.error,
      [warningClass]: this.props.warning
    });
  }

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    onChange({ [name]: target.value });
  };

  render() {
    const { name, type, value } = this.props;
    return (
      <input
        name={name}
        type={type}
        value={value}
        onChange={this.handleChange}
        className={this.classnames}
      />
    );
  }
}
