/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {AttackModal} from 'src/components/AttackModal';
import {Button} from 'src/components/Button';
import {Spinner} from 'src/components/Spinner';
import {TagList} from 'src/components/Tag/TagList';
import styles from 'src/components/DetailedCard/styles.module.scss';


/**
 * CODE
 */
function DetailedCard ({card})
{
  const attackModalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAttack, setSelectedAttack] = useState();

  const handleClick = (attack) =>
  {
    setSelectedAttack(attack);

    attackModalRef?.current?.onOpen();
  };

  return (
    <article data-testid="detailed-card" className={styles.container}>
      <section className={styles.imageContainer} aria-labelledby="card-image">
        <h1 className="accessibilityOnly" id="card-image">
          cardImage
        </h1>
        <img
          data-testid="detailed-card-img"
          className={styles.image}
          src={card.images.large}
          alt={`${card.name}`}
          onLoad={() => setIsLoading(false)}
        />
      </section>
      {isLoading ? (
        <Spinner />
      ) : (
        <section
          className={styles.detailsContainer}
          aria-labelledby={card.name}
        >
          <div className={`row ${styles.title}`}>
            <h2 id={card.name}>{card.name}</h2>
            <p data-testid="detailed-card-id" className={styles.id}>
              {card.id}
            </p>
          </div>

          <TagList
            title={
              'Resistances'
            }
            tags={card.types}
          />
          <TagList
            title={
              'Resistances'
            }
            tags={card.resistances}
            valueColor="Resistance"
          />
          <TagList
            title={
              'weaknesses'
            }
            tags={card.weaknesses}
            valueColor="Weakness"
          />

          {card?.attacks && (
            <section
              aria-labelledby="attacks"
              className={styles.attacksContainer}
            >
              <h3 className="tagListTitle" id="attacks">111</h3>
              <ul>
                {card.attacks?.map(attack => (
                  <li key={attack.name}>
                    <Button onClick={() => handleClick(attack)}>
                      {attack.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      )}

      <AttackModal attack={selectedAttack} ref={attackModalRef} />
    </article>
  );
}

DetailedCard.propTypes = {
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
    resistances: PropTypes.arrayOf(),
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
 * CODE
 */
export {
  DetailedCard
};
