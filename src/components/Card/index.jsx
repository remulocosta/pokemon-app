/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from 'src/components/Card/styles.module.scss';
import {TagList} from 'src/components/Tag/TagList';


/**
 * CODE
 */
function Card (props)
{
  const {card} = props;

  return (
    <article data-testid="small-card" className={styles.card}>
      <Link
        to={`/card/${card.id}`}
        data-testid="small-card-anchor"
        className={styles.link}
      >
        <div>
          <img
            loading="lazy"
            src={card.images.small}
            alt={`${card.name}`}
          />
        </div>

        <section className={styles.title} aria-labelledby={card.name}>
          <div className="row">
            <h2 id={card.name}>{card.name}</h2>
            <p className={styles.id}>{card.id}</p>
          </div>
          <TagList tags={card?.types} />
        </section>
      </Link>
    </article>
  );
}

// memoize component
const CardElement = React.memo(Card);

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    attacks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        cost: PropTypes.arrayOf(PropTypes.string),
        convertedEnergyCost: PropTypes.number,
        damage: PropTypes.string,
        text: PropTypes.string,
      })
    ),
    weaknesses: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    images: PropTypes.shape({
      small: PropTypes.string,
      large: PropTypes.string,
    }),
  })
};


/**
 * EXPORTS
 */
export {
  CardElement
};
