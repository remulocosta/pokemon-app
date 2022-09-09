/**
 * IMPORTS
 */
import React from 'react';
import {useEffect} from 'react';
import {DetailedCard} from 'src/components/DetailedCard';
import {Spinner} from 'src/components/Spinner';
import {useAppDispatch} from 'src/hooks/useAppDispatch';
import {useAppSelector} from 'src/hooks/useAppSelector';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {MdChevronLeft} from 'react-icons/md';
import styles from 'src/pages/CardDetails/styles.module.scss';
import {resetCardsFeedbackMessage} from 'src/redux/features/pokemon/pokemonSlice';
import {fetchCardDetails} from 'src/redux/thunk/fetchCardDetail';


/**
 * CODE
 */
function CardDetails ()
{
  const {detailedCard, isLoading, feedbackMessage} = useAppSelector(
    state => state.pokemon,
  );
  const dispatch = useAppDispatch();
  const navigateTo = useNavigate();
  const {id} = useParams();

  useEffect(() =>
  {
    if (id) dispatch(fetchCardDetails({id: String(id)}));
  }, [id, dispatch]);

  useEffect(() =>
  {
    if (feedbackMessage)
    {
      dispatch(resetCardsFeedbackMessage());
      navigateTo('/');
    }
  }, [feedbackMessage, dispatch, navigateTo]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link to="/">
            <a data-testid="detailed-card-return-button" className={styles.link}>
              <MdChevronLeft />
            </a>
          </Link>

          <div className={styles.imageContainer}>
            <Link to="/">
              <a className={styles.link}>
                <img data-testid="logo" src="/logo.png" alt={'logoAlt'} />
              </a>
            </Link>
          </div>
        </header>

        <main>
          {detailedCard && !isLoading && <DetailedCard card={detailedCard} />}
          {isLoading && <Spinner />}
        </main>
      </div>
    </div>
  );
}


/**
 * EXPORTS
 */
export {
  CardDetails
};
