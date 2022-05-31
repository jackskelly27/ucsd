import axios from 'axios'
import { config } from '../../config';

// Get gyms

/**
 * 
 * @param {*} queryParams -> an object with the values for searching in them
 * @returns 
 */
const getGyms = async (queryParams) => {

  let response; 
  if (!queryParams) { // If no searchParams are provided

    response = await axios.get(`${config.api.url}/api/gyms`);

  } else {

    var queryString = Object.keys(queryParams).map(function(key) {
      return key + '=' + queryParams[key]
    }).join('&');
    
    console.log(queryString);
  
    response = await axios.get(`${config.api.url}/api/gyms?${queryString}`);
  }

  return response.data;
}

const gymService = {
  getGyms,
}

export default gymService;