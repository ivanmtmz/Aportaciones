import ImpresoraDeDatos from './ImpresoraDeDatos';

class ImpresoraDeDatosPorConsola extends ImpresoraDeDatos {
	imprimirDatos(datos) {
		console.log('Imprimiendo datos...');
		console.log(datos);
	}
}

export default ImpresoraDeDatosPorConsola;
