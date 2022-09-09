/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import {forwardRef, useImperativeHandle, useState, React} from 'react';
import {GiPointySword, GiRollingEnergy} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import styles from 'src/components/AttackModal/styles.module.scss';


/**
 * CODE
 */
function AttackModalBase (props, ref)
{
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
  }));

  const {attack} = props;

  if (!attack) return null;

  return (
    <div
      role="none"
      className={`${styles.container} ${isOpen && styles.containerOpen}`}
      onClick={onClose}
      onKeyDown={onClose}
    >
      <section
        role="dialog"
        onClick={event => event.stopPropagation()}
        onKeyDown={event => event.stopPropagation()}
        aria-labelledby={attack.name}
        className={styles.content}
        data-testid="attack-modal"
      >
        <header className={`row ${styles.header}`}>
          <h2 id={attack.name}>{attack.name}</h2>
          <button
            type="button"
            onClick={onClose}
            data-testid="attack-modal-close-button"
          >
            <MdClose />
          </button>
        </header>

        {attack.convertedEnergyCost && (
          <section>
            <h3>Custo:</h3>
            <ul className={`row ${styles.attribute}`}>
              {attack.cost.map((energy, index) => (
                <li key={index} className={`${styles[`color-${energy}`]}`}>
                  <GiRollingEnergy />
                </li>
              ))}

              <p>{attack.convertedEnergyCost}</p>
            </ul>
          </section>
        )}

        {attack?.damage && (
          <section>
            {/* <h3>{damage}</h3> */}
            <h3>Dano:</h3>
            <div className={`row ${styles.attribute}`}>
              <GiPointySword />

              <p>{attack.damage}</p>
            </div>
          </section>
        )}

        {attack?.text && (
          <section>
            {/* <h3>{description}</h3> */}
            <h3>description</h3>
            <p className={styles.description}>{attack.text}</p>
          </section>
        )}
      </section>
    </div>
  );
}

AttackModalBase.propTypes = {
  attack: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cost: PropTypes.arrayOf([PropTypes.any]).isRequired,
    convertedEnergyCost: PropTypes.number.isRequired,
    damage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};


/**
 * EXPORTS
 */
export const AttackModal = forwardRef(AttackModalBase);
