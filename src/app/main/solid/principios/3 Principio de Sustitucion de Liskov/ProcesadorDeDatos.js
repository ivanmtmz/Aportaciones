import FormateadorDeDatos from './../2 Principio Abierto Cerrado/FormateadorDeDatos';
import FormateadorDeDatosMayusculas from './../2 Principio Abierto Cerrado/FormateadorDeDatosMayusculas';
import FormateadorDeDatosMinusculas from './../2 Principio Abierto Cerrado/FormateadorDeDatosMinusculas';
import ImpresoraDeDatos from './../1 Principio de Responsabilidad Unica/ImpresoraDeDatos';

class ProcesadorDeDatos {
	procesaDatos(datos, tipoDeFormateo) {
		var formateador = this.dameFormateador(tipoDeFormateo);
		var datosFormateados = formateador.formatearDatos(datos);
		var impresora = new ImpresoraDeDatos();
		return impresora.imprimirDatos(datosFormateados);
	}

	dameFormateador(tipoDeFormateo) {
		switch (tipoDeFormateo) {
			case 'M':
				return new FormateadorDeDatosMayusculas();
			case 'm':
				return new FormateadorDeDatosMinusculas();
			default:
				return new FormateadorDeDatos();
		}
	}
}

export default ProcesadorDeDatos;
