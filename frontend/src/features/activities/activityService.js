import axios from 'axios'
import { config } from '../../config';

// Get activities

/**
 * 
 * @param {*} queryParams -> an object with the values for searching in them
 * @returns 
 */
const getActivities = async (queryParams) => {

  let response; 
  if (!queryParams) { // If no searchParams are provided

    response = await axios.get(`${config.api.url}/api/activities`);

  } else {

    var queryString = Object.keys(queryParams).map(function(key) {
      return key + '=' + queryParams[key]
    }).join('&');
    
    console.log(queryString);
  
    response = await axios.get(`${config.api.url}/api/activities?${queryString}`);
  }

  return response.data;
}

const activityService = {
  getActivities,
}

export default activityService;