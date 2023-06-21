import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { COUNTRY_API_BASE_URL } from '../util/config';
import logger from "../util/logger";
import {CountriesResponse} from "../types/types";

export class CountryService {
    private defaultConfig: AxiosRequestConfig = {
        baseURL: COUNTRY_API_BASE_URL,
        timeout: 10000,
    }

    public async getCountries(): Promise<CountriesResponse | undefined> {
        const query = `
        query {
          countries {
            name
            continent {
              name
              code
            }
            currency
            phone 
            states {
              name
              country {
                name
              }
            }
            languages {
              name
              code
            }
            subdivisions {
              name
            }
          }
        }`;

        logger.debug('Fetching countries from API');
        try {
            const response: AxiosResponse<CountriesResponse> = await axios.post('', { query }, this.defaultConfig);
            return response.data;
        } catch (error) {
            logger.warn('Error fetching countries from API', error);
            return undefined
        }
    }
}

export const countryService = new CountryService();
