import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerValue: ""
    };
  }
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
  };
  get isControl() {
    return "value" in this.props;
  }
  get value() {
    var reg = /(\d+\.?\d*)|-\d*\.?\d*/;
    if (this.isControl) {
      // 如果是数字或者小数时，返回改值，其余返回''
      if (reg.test(this.props.value)) {
        return reg.exec(this.props.value)[0];
      } else {
        return "";
      }
    } else {
      // 如果是数字或者小数时，返回改值，其余返回''
      if (reg.test(this.state.innerValue)) {
        return reg.exec(this.state.innerValue)[0];
      } else {
        return "";
      }
    }
  }
  render() {
    return (
      <div>
        <div>
          <span
            className="btn"
            onClick={e => {
              if (!this.isControl) {
                this.setState({
                  innerValue: this.state.innerValue - 1
                });
              } else {
                this.props.onChange(+this.value - 1);
              }
            }}
          >
            -
          </span>
          <input
            className="ipt"
            value={this.value}
            onChange={e => {
              if (!this.isControl) {
                this.setState({
                  innerValue: e.target.value
                });
              }
              this.props.onChange(e.target.value);
            }}
          />
          <span
            className="btn"
            onClick={e => {
              if (!this.isControl) {
                this.setState({
                  innerValue: this.state.innerValue + 1
                });
              } else {
                this.props.onChange(+this.value + 1);
              }
            }}
          >
            +
          </span>
          <span className={this.value === "" ? "show" : "hide"}>
            只能输入数字
          </span>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    });
  }
}
export default InputNumber;
