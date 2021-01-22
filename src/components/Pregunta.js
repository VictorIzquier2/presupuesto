import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

  // Definir el State
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Función que lee el Presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10))
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar
    if(cantidad < 1 || isNaN(cantidad)){
      guardarError(true);
    }else{
      // Si se pasa la validación
      guardarError(false);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
      actualizarPregunta(false);

    }
  }

  return ( 
    <Fragment>
      <h2>Presupuesto</h2>
      {error ? <Error mensaje='Presupuesto incorrecto'/> : null}
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type='number'
          className='u-full-width'
          placeholder='cantidad'
          onChange={definirPresupuesto}          
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Define tu Presupuesto'
        />
      </form>
    </Fragment>
   );
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;