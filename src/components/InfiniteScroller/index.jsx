/**
 * IMPORTS
 */
import 'intersection-observer';
import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useAppSelector} from 'src/hooks/useAppSelector';
import styles from 'src/components/InfiniteScroller/styles.module.scss';


/**
 * CODE
 */
function InfiniteScroller ({onEndReached, ...props})
{
  const {shouldFetchMoreData} = useAppSelector(state => state.pokemon);
  const loader = useRef(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleObserver = useCallback((entries) =>
  {
    const target = entries[0];

    if (target.isIntersecting && !isFetching && shouldFetchMoreData)
    {
      setIsFetching(true);
      onEndReached();
      setTimeout(() =>
      {
        setIsFetching(false);
      }, 300);
    }
  }, [onEndReached, isFetching, shouldFetchMoreData]);

  useEffect(() =>
  {
    const option = {
      root: null,
      rootMargin: '2px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        {props.children}
      </div>
      <div ref={loader} />
    </div>
  );
}

InfiniteScroller.propTypes = {
  onEndReached: PropTypes.func,
  children: PropTypes.node.isRequired,
};


/**
 * EXPORTS
 */
export
{
  InfiniteScroller
};
