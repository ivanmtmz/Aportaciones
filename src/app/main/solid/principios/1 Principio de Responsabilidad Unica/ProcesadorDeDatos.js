import FormateadorDeDatos from './FormateadorDeDatos';
import ImpresoraDeDatos from './ImpresoraDeDatos';

class ProcesadorDeDatos {
	procesaDatos(datos) {
		var formateador = new FormateadorDeDatos();
		var datosFormateados = formateador.formatearDatos(datos);

		var impresora = new ImpresoraDeDatos();
		return impresora.imprimirDatos(datosFormateados);
	}
}

export default ProcesadorDeDatos;
