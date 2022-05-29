import axios from 'axios'
import { config } from '../../config';

// Get activities
const getActivities = async () => {

  const response = await axios.get(`${config.api.url}/api/activities`);

  return response.data;
}

const activityService = {
  getActivities,
}

export default activityService;