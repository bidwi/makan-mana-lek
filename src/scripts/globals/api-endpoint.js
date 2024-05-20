import CONFIG from './config';

const API_ENDPOINT = {
  MAIN_PAGE: `${CONFIG.BASE_URL}list`,
  IMAGE: `${CONFIG.BASE_IMAGE_URL}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
