import React, { Component } from 'react';

class CounterRenderProps extends Component {
	state = {
		count: this.props.initCounter
	};

	increase = () => this.setState(prevState => ({ count: prevState.count + 1 }));
	decrease = () => this.setState(prevState => ({ count: prevState.count - 1 }));

	render() {
		return (
			<div>
				{this.props.children({
					count: this.state.count,
					increase: this.increase,
					decrease: this.decrease
				})}
			</div>
		);
	}
}

export default CounterRenderProps;
