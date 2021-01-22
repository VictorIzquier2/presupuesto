import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helpers';
import PropTypes from 'prop-types';


const Presupuesto = ({presupuesto, restante}) => {
  return ( 
    <Fragment>
      <div className='alert alert-primary'>
        Total: {presupuesto}€
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: {restante}€
      </div>
    </Fragment>
   );
}

Presupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}
 
export default Presupuesto;