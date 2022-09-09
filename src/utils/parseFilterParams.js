/**
 * CODE
 */
function parseFilterParams (params)
{
  return Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key =>
    {
      if (Array.isArray(params[key]))
      {
        let response = '';

        params[key].forEach((filter, index) =>
        {
          response = response.concat(
            `${key}=${filter}${index !== params[key].length - 1 ? '&' : ''}`,
          );
        });
        return response;
      }
      return [key, params[key]]
        .map(value => encodeURIComponent(value))
        .join('=');
    })
    .join('&');
}


/**
 * EXPORTS
 */
export {
  parseFilterParams
};
