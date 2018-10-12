import React from "react";

class ScrollWrapper extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  };

  render() {
    return this.props.children;
  };
};

export default ScrollWrapper;
