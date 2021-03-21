export const environment = {
  production: true,
  API_KEY: process.env.API_KEY,
  baseURL: 'https://api.themoviedb.org/3',
  language: 'en-US',
  paramsDefault: `api_key=${process.env.API_KEY}&language=en-US`
};
