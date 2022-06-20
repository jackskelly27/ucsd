import axios from 'axios'
import { config } from '../../config';

// Get resources

/**
 * 
 * @param {*} queryParams -> an object with the values for searching in them
 * @returns 
 */
const getResources = async (queryParams) => {

  let response; 
  if (!queryParams) { // If no searchParams are provided

    response = await axios.get(`${config.api.url}/api/resources`);

  } else {

    var queryString = Object.keys(queryParams).map(function(key) {
      return key + '=' + queryParams[key]
    }).join('&');
    
    console.log(queryString);
  
    response = await axios.get(`${config.api.url}/api/resources?${queryString}`);
  }

  return response.data;
}

const resourceService = {
  getResources,
}

export default resourceService;