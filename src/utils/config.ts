
import dotenv from 'dotenv';
dotenv.config();


export const API_CONFIG = {
  baseUrl: 'https://api.weatherbit.io/v2.0',
  apiKey: `${process.env.WEATHERBIT_API_KEY}`,
};
export const WEB_CONFIG = {
  baseUrl: 'https://www.saucedemo.com/v1/',
  username: `${process.env.username_standard}`,
  password: `${process.env.password_standard}`,
};