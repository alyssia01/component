import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  state = {
    collapse: this.props.collapse
  };
  // 收起
  handleExpand = () => {
    this.setState({
      collapse: false
    });
  };

  handleCollapse = () => {
    this.setState({
      collapse: true
    });
  };

  render() {
    const { children, expansionText, collapseText, maxLength } = this.props;
    const { collapse } = this.state;

    return (
      <div>
        <p>
          {collapse ? children : children.substr(0, maxLength)}
          {children.length > maxLength ? (
            <a onClick={collapse ? this.handleExpand : this.handleCollapse}>
              {collapse ? collapseText : "..." + expansionText}
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
    );
  }
}
App.propTypes = {
  maxLength: PropTypes.number, //最大字符长度
  collapseText: PropTypes.string, //收起
  expansionText: PropTypes.string, //展开
  children: PropTypes.string, //插槽，传过来的数据
  width: PropTypes.string, //宽度
  collapse: PropTypes.bool //是否展开
};

App.defaultProps = {
  maxLength: 20, //最大字符长度
  collapseText: "收起", //收起
  expansionText: "展开", //展开
  children: "", //插槽，传过来的数据
  width: "300px", //宽度
  collapse: false //默认收起
};
