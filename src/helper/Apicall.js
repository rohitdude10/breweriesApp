import axios from 'axios';

export const callapi = (filtervalue="") => {
  const URL = `https://api.openbrewerydb.org/breweries${filtervalue}`;
  return axios(URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
    
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};