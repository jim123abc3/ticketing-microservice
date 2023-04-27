import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL:
        'http://ticket-app-prod-long-url.store/',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
