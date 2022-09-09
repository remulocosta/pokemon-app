/**
 * EXPORTS
 */
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'src/components/Tag/styles.module.scss';


/**
 * CODDE
 */
function Tag ({type, value, valueColor})
{
  return (
    <div className={styles.container}>
      <div
        data-testid="tag"
        className={`${styles.tag} ${styles[`color-${type}`]}`}
      >
        {value && (
          <span className={valueColor && styles[`value-${valueColor}`]}>
            {value}
          </span>
        )}
        <p>{type}</p>
      </div>
    </div>
  );
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.arrayOf([PropTypes.any]).isRequired,
  valueColor: PropTypes.oneOf(['Resistance', 'Weakness']).isRequired,
};


/**
 * EXPORTS
 */
export {
  Tag
};
