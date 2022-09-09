/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import React from 'react';
import {PulseLoader} from 'react-spinners';


/**
 * CODE
 */

/**
  * I am the spinner component.
  *
  * :returns: spinner component
  */
function Spinner (props)
{
  return (
    <div className="center">
      <PulseLoader color={props.color || '#ffcb05'} size={25} {...props} />
      <PulseLoader color={props.color || '#ffcb05'} size={25} {...props} />
    </div>
  );
}

Spinner.propTypes = {
  color: PropTypes.string
};


/**
 * EXPORTS
 */
export {
  Spinner
};
