/**
 * IMPORTS
 */
import React from 'react';
import styles from 'src/components/Input/styles.module.scss';


/**
 * CODE
 */
function Input (props)
{
  return (
    <input
      {...props}
      data-testid="input"
      className={styles.input}
    />
  );
}


/**
 * EXPORTS
 */
export {
  Input
};
