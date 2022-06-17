import PropTypes from 'prop-types'


const booleanito = true;
const objectivo = {
  name: "Carlitos"
}
const arraycito = [1,2,3,4,5,6,7]
const name = 'Carlos'
const sum = (a,b) => {
  return a+b
}

const FirstApp = ({title = "SI EL TITULO VIENE NULL", subtitle=123}) =>{
  return(
    <>
      <h1>{ title } { subtitle }</h1>
      <hr />
      <h1>Boolean value { booleanito }</h1>
      <h1>Object value { JSON.stringify(objectivo) }</h1>
      <h1>Array { arraycito }</h1>
      <h1>String value { name }</h1>
      <h1>Function {sum(1,1)}</h1>
      <p>Este es un subtitulo</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

export default FirstApp;
