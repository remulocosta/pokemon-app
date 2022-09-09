/**
 * IMPORTS
 */
import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/redux/store';
import {AppRoutes} from 'src/Routes/AppRoutes';


/**
 * CODE
 */

/**
 * I am the main application element.
 *
 * :returns: main application JSX
 */
function App ()
{
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}


/**
 * EXPORTS
 */
export {
  App
};
