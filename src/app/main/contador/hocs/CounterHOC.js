import React, { Component } from 'react';

//RECIBIMOS COMO PARAMETRO UN COMPONENTE
const CounterHOC = ComposedComponent =>
	//SE RETORNA UN NUEVO COMPONENTE
	class CounterHOC extends Component {
		/* INICIALIZAMOS EL ESTADO 
    CON LO QUE VENGA EN PROPIEDADES */
		state = {
			count: this.props.initCounter
		};

		/* SE CREA LA FUNCIÓN PARA INCREMENTAR
    EL CONTADOR */
		increase = () =>
			this.setState(prevState => ({
				count: prevState.count + 1
			}));

		/* SE CREA LA FUNCIÓN PARA DECREMENTAR
    EL CONTADOR */
		decrease = () =>
			this.setState(prevState => ({
				count: prevState.count - 1
			}));

		/* LA CLASE RETORNA EL COMPONENTE QUE SE PASÓ COMO
    PARAMETRO CON LAS PROPS DEL MISMO COMPONENTE MAS LAS FUNCIONALIDADES
    Y VARIABLES EXTRA */
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
