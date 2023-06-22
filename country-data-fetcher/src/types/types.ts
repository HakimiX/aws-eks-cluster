export type Continent = {
    name: string;
    code: string;
}

export type States = {
    name?: string;
}

export type Language = {
    code: string;
    name: string;
}

export type Subdivision = {
    name: string;
}

export type Country = {
    name?: string;
    continent?: Continent;
    currency?: string;
    phone?: string;
    states?: States[];
    languages?: Language[];
    subdivisions?: Subdivision[];
}

export interface CountriesResponse {
    couuntries: Country[];
}

export interface CountryResponse {
    country: Country;
}
