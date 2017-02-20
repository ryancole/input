import React from "react";
import classnames from "classnames";

export default class Input extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(["text", "password"]),
    error: React.PropTypes.instanceOf(Error),
    value: React.PropTypes.string.isRequired,
    warning: React.PropTypes.instanceOf(Error),
    onChange: React.PropTypes.func.isRequired,
    dangerClass: React.PropTypes.string,
    warningClass: React.PropTypes.string
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
