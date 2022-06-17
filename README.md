Welcome to react again

Toda app de react comienza con un functional component
Tratar de no usar clases

Components:
  Si se exporta con export default, en el import del padre no se requieren las llaves
  No muestran objetos
  No muestra funciones async xq espera un promise y eso es un object
  Se recomienda poner la data fuera del functional component ya que se carga cada vez q se va a renderizar el componente si no
  En cuanto a estilos, los componentes de react te permite manejar cualquiera
  Estos componentes reciben properties, los que llamaremos props el cual recibe como parametro de functional component
  Las props con comillas en le padre es string prop1="", si se requiere otro tipo de data debe ser con llaves prop2={ }
  