import FormateadorDeDatos from './FormateadorDeDatos';

class FormateadorDeDatosMinusculas extends FormateadorDeDatos {
	formatearDatos(datos) {
		var datosFormateados = super.formatearDatos(datos);
		return datosFormateados.toLowerCase();
	}
}

export default FormateadorDeDatosMinusculas;
