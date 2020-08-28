import FormateadorDeDatos from './FormateadorDeDatos';

class FormateadorDeDatosMayusculas extends FormateadorDeDatos {
	formatearDatos(datos) {
		var datosFormateados = super.formatearDatos(datos);
		return datosFormateados.toUpperCase();
	}
}

export default FormateadorDeDatosMayusculas;
