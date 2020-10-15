/**
 * Creamos un componente reutilizable el cuál guardará toda la lógica
 * que tiene un contador.
 */

import React, { Component } from 'react';

class CounterRenderProps extends Component {
	/**
	 * Se manejan estados en esta clase
	 */
	state = {
		count: this.props.initCounter
	};

	/**
	 * Operaciones de incrementar y decrementar
	 */
	increase = () => this.setState(prevState => ({ count: prevState.count + 1 }));
	decrease = () => this.setState(prevState => ({ count: prevState.count - 1 }));

	render() {
		/**
		 * Se retorna en el children del componente un callback con:
		 * Valor del contador
		 * Operación de incrementar
		 * Operación de decrementar
		 */
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
