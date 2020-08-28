import React from 'react';

import ImpresoraDeDatos from './ImpresoraDeDatos';

class ImpresoraDeDatosEnCapa extends ImpresoraDeDatos {
	imprimirDatos(datos) {
		const capa = this.dameCapa();
		return capa(React.Fragment, null, datos);
	}

	dameCapa() {
		return React.createElement;
	}
}

export default ImpresoraDeDatosEnCapa;
