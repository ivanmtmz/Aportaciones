class ProcesadorDeDatos {
	procesaDatos(datos) {
		var datosFormateados = this.formatearDatos(datos);
		return this.imprimirDatos(datosFormateados);
	}

	formatearDatos(datos) {
		return '******************************' + '\n' + datos + '\n' + '******************************';
	}

	imprimirDatos(datos) {
		return datos;
	}
}

export default ProcesadorDeDatos;
