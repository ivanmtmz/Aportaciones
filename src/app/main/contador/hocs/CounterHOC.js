import React, { Component } from "react";

const CounterHOC = ComposedComponent =>
  class CounterHOC extends Component {
    state = {
      count: this.props.initCounter
    };

    increase = () =>
      this.setState(prevState => ({
        count: prevState.count + 1
      }));

    decrease = () =>
      this.setState(prevState => ({
        count: prevState.count - 1
      }));

    render() {
      return (
        <ComposedComponent
          {...this.props}
          count={this.state.count}
          increase={this.increase}
          decrease={this.decrease}
        />
      );
    }
  };

export default CounterHOC;
