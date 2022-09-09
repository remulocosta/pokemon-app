/**
 * IMPORTS
 */
import PropTypes from 'prop-types';
import pokemonApi from 'src/services/api';
import {parseFilterParams} from 'src/utils/parseFilterParams';


/**
 * CODE
 */
async function cardDetailsRequest (id)
{
  // create api instance
  const api = pokemonApi();

  const response = await api.get(`/cards/${id}`);

  return response.data;
}

async function cardsRequest (page, filter)
{
  const params = {
    orderBy: 'name',
    page,
    pageSize: 50,
    q: `${filter && `name:"*${filter}*"`} supertype:Pokemon`,
  };

  // create api instance
  const api = pokemonApi();

  const response = await api.get(`/cards?${parseFilterParams(params)}`);

  return response.data;
}

// validation of types
cardDetailsRequest.propTypes = {
  id: PropTypes.string
};
cardsRequest.propTypes = {
  page: PropTypes.number,
  filter: PropTypes.string
};


/**
 * EXPORTS
 */
export {
  cardDetailsRequest,
  cardsRequest
};
