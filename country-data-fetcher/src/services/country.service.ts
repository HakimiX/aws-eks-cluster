import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { COUNTRY_API_BASE_URL } from '../util/config';
import logger from "../util/logger";
import {CountriesResponse, CountryResponse} from "../types/types";
import {COUNTRIES, COUNTRY} from "../graphql/queries";

export class CountryService {
    private defaultConfig: AxiosRequestConfig = {
        baseURL: COUNTRY_API_BASE_URL,
        timeout: 10000,
    }

    public async getCountries(): Promise<CountriesResponse | undefined> {
        logger.debug('Fetching countries from API');
        try {
            const response: AxiosResponse<CountriesResponse> = await axios.post('',
                {
                    query: COUNTRIES
                }, this.defaultConfig);
            return response.data;
        } catch (error) {
            logger.warn('Error fetching countries from API', error);
            return undefined
        }
    }

    /*
    * Fetches the details of a specific country from an API
    *
    * @param {string} code - The code of the country to fetch (i.e. "US", "CA", "MX")
    * @returns {P- The response from the API
    * */

    public async getCountry(code: string): Promise<CountryResponse | undefined> {
        logger.debug(`Fetching country with code ${code} from API`);
        const variables = { code };
        try {
            const response: AxiosResponse<CountryResponse> = await axios.post('',
                {
                    query: COUNTRY,
                    variables: variables
                }, this.defaultConfig);
            if (response.data.country === null) {
                logger.warn('Country not found');
                return undefined
            }
            return response.data;
        } catch (error) {
            logger.warn('Error fetching country from API', error);
            return undefined
        }
    }
}

export const countryService = new CountryService();
