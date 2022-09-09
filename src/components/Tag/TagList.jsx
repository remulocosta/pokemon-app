/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import React from 'react';
import {Tag} from 'src/components/Tag';
import styles from 'src/components/Tag/styles.module.scss';


/**
 * CODE
 */
function TagList ({title, tags, valueColor})
{
  if (!tags) return null;

  return (
    <section id="title">
      <h3 className="tagListTitle" id={title}>
        {title}
      </h3>
      <div className={`${styles.tagList} row row-overflow`}>
        {tags.map(tag =>
        {
          const type = typeof tag === 'string' ? tag : tag?.type;
          const value = typeof tag === 'string' ? undefined : tag?.value;

          return (
            <Tag key={type} type={type} value={value} valueColor={valueColor} />
          );
        })}
      </div>
    </section>
  );
}

TagList.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf([PropTypes.any]).isRequired,
  valueColor: PropTypes.oneOf(['Resistance', 'Weakness']).isRequired,
};


/**
 * EXPORTS
 */
export {
  TagList
};
