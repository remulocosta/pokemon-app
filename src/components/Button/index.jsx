/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'src/components/Button/styles.module.scss';


/**
 * CODE
 */
function Button (props)
{
  // return component
  return (
    <button
      data-testid="button"
      className={styles.button}
      type="button"
      {...props}
    >
      <span>{props.children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};


/**
 * EXPORTS
 */
export {
  Button
};
