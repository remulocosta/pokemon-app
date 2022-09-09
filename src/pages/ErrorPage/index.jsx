/**
 * IMPORTS
 */
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Spinner} from 'src/components/Spinner';
import styles from 'src/pages/ErrorPage/styles.module.scss';


/**
 * CODE
 */
function ErrorPage ()
{
  const navigateTo = useNavigate();

  useEffect(() =>
  {
    setTimeout(() =>
    {
      navigateTo('/', {replace: true});
    }, 5000);
  }, [navigateTo]);

  // return component
  return (
    <div className={styles.container}>
      <div className="center column spaced header"
      >
        <header data-testid="header">
          <h1>Página não foi localizada</h1>
          <span>redirecionando...<Spinner size={12}/></span>
        </header>
        <dic className={styles.containerError}>
          <span>4</span>
          <img src="/favicon.svg" />
          <span>4</span>
        </dic>
        <Link className="App-link" to="/"
          data-testid="goto-home"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}


/**
 * EXPORTS
 */
export {
  ErrorPage
};
