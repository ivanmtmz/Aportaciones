import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

import ExampleCounterHOC from './components/ExampleCounterHOC';
import ExampleCounterRenderProps from './components/ExampleCounterRenderProps';
import ExampleCounterHooks from './components/ExampleCounterHooks';

const styles = theme => ({
	layoutRoot: {}
});

class Contador extends Component {
	render() {
		const { classes } = this.props;
		return (
			<FusePageSimple
				classes={{
					root: classes.layoutRoot
				}}
				header={
					<div className="p-24">
						<h4>Header</h4>
					</div>
				}
				contentToolbar={
					<div className="px-24">
						<h4>Content Toolbar</h4>
					</div>
				}
				content={
					<div className="flex p-24 flex-col">
						<ExampleCounterHOC initCounter={0} />
						<ExampleCounterRenderProps initCounter={1} />
						<ExampleCounterHooks initCounter={2} />
					</div>
				}
			/>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Contador);
