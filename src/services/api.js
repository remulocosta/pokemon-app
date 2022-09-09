/**
 * IMPORTS
 */
import axios from 'axios';

// import {AxiosInstance} from 'axios';


/**
  * CONSTANTS AND DEFINITIONS
  */
const DEFAULT_TIMEOUT_VALUE = 18000;
const DEFAULT_URL = 'https://api.pokemontcg.io/v2/';


/**
  * CODE
  */

/**
  * I create an axios instance.
  *
  * :param baseURL: base URL to be used
  * :param useHeaders: whether should use headers configuration or not
  * :param timeout: timeout configuration
  *
  * :returns: axios API instance
  */
function factoryAPI (baseURL = DEFAULT_URL,
                     useHeaders = true,
                     timeout = DEFAULT_TIMEOUT_VALUE)
{
  return axios.create(
    {
      baseURL: baseURL,
      headers: useHeaders === true ? {
        'X-Api-Key': '',
      } : {},
      timeout,
    }
  );
}


/**
  * EXPORTS
  */
export default factoryAPI;
