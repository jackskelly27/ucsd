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

    console.log("sort", queryParams.sort);
    var sortString = queryParams.sort[0] + '=' + queryParams.sort[1];
    console.log("sortString",sortString);


    var queryString = Object.keys(queryParams).filter(function(key) {
      if (key === "sort") {
        return false;
      }
      return true;
  }).map(function(key) {
      return key + '=' + queryParams[key];
  }).join('&');
  
    response = await axios.get(`${config.api.url}/api/resources?${queryString}&${sortString}`);
  }

  console.log('queryString', queryString);

  return response.data;
}

const resourceService = {
  getResources,
}

export default resourceService;