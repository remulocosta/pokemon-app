/**
 * IMPORTS
 */
import {React} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Button} from 'src/components/Button';
import {CardElement} from 'src/components/Card';
import {InfiniteScroller} from 'src/components/InfiniteScroller';
import {Input} from 'src/components/Input';
import {Spinner} from 'src/components/Spinner';
import styles from 'src/pages/Home/home.module.scss';
import {useAppDispatch} from 'src/hooks/useAppDispatch';
import {useAppSelector} from 'src/hooks/useAppSelector';
import {
  resetCardsFeedbackMessage,
  resetCardsState,
} from 'src/redux/features/pokemon/pokemonSlice';
import {fetchCards} from 'src/redux/thunk/fetchCards';


/**
 * CONSTANTS AND DEFINITIONS
 */
const NO_CARD_FOUND = 'Nenhuma carta localizada';


/**
 * CODE
 */

/**
 * I am the home component.
 *
 * :returns: home component
 */
function Home ()
{
  const {cards, isLoading, shouldFetchMoreData, feedbackMessage} =
    useAppSelector(state => state.pokemon);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('');

  const handleFetchCards = () =>
  {
    if (!isLoading && shouldFetchMoreData)
    {
      dispatch(fetchCards({filter}));
    }
  };

  const handleReset = () =>
  {
    dispatch(resetCardsState());
  };

  useEffect(() =>
  {
    if (feedbackMessage)
    {
      dispatch(resetCardsFeedbackMessage());
    }
  }, [feedbackMessage, dispatch]);

  return (
    <div className={styles.container}>
      <header>
        <img data-testid="logo" src="/logo.png" alt={'logoAlt'} />
        <section aria-labelledby="filter-area">
          <h1 id="filter-area" className="accessibilityOnly">
            Filter input
          </h1>
          <div>
            <Input
              data-testid="data-testid=input"
              value={filter}
              placeholder={'Pesquisar pokémon'}
              onChange={e => setFilter(e.target.value)}
            />
            <Button
              data-test2id="search-button"
              onClick ={handleReset}
            >
              Buscar
            </Button>
          </div>
        </section>
      </header>

      <main>
        <InfiniteScroller
          onEndReached={handleFetchCards}
        >
          {cards?.length > 0 && (
            <ul>
              {cards.map((card, index) => (
                <li key={`${card}-${index}`}>
                  <CardElement card={card}/>
                </li>
              ))}
            </ul>
          )}
          {cards?.length === 0 && !shouldFetchMoreData && (
            <p data-testid="home-no-card-found" className={styles.noCardFound}>
              {NO_CARD_FOUND}
            </p>
          )}
          {isLoading && <Spinner />}
        </InfiniteScroller>
      </main>
    </div>
  );
}


/**
 * EXPORTS
 */
export {
  Home
};
