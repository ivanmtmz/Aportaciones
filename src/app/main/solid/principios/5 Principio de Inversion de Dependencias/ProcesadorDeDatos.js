class ProcesadorDeDatos {
	constructor(_formateador, _impresora) {
		this.formateador = _formateador;
		this.impresora = _impresora;
	}

	procesaDatos(datos) {
		var datosFormateados = this.formateador.formatearDatos(datos);
		return this.impresora.imprimirDatos(datosFormateados);
	}
}

export default ProcesadorDeDatos;
