const COUNTRIES = `
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

const COUNTRY = `
query ($code: ID!) {
  country(code: $code) {
    name
    capital 
    continent {
      name
    }
    currency
    languages {
      name
    }
    native
    phone
    subdivisions {
      name
    }
  }
}
`;


export {
    COUNTRIES,
    COUNTRY
}
