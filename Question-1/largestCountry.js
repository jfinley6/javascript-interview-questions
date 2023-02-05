// Find the country with the largest combined population by
// joining the given data on foreign keys

// The output of largestCountry should be an object with a
// key 'name' representing the country name and a key 'population'
// representing the countries total population

// Example Input Data:
// const countries = [
//   { id: 3, name: 'Russia' },
//   { id: 1, name: 'USA' },
// ];

// const cities = [
//   { id: 3, country_id: 1, name: 'Los Angeles' },
//   { id: 8, country_id: 3, name: 'Moscow' },
//   { id: 2, country_id: 1, name: 'Seattle' },
// ];

// const populations = [
//   { id: 1, city_id: 3, amount: 3960000 },
//   { id: 2, city_id: 8, amount: 11920000 },
//   { id: 3, city_id: 2, amount: 8240000 },
// ];

// Example Output: { name: 'USA', population: 12200000 }

const largestCountry = (countries, cities, populations) => {

let sum = 0;
  let countryPopulation = 0;
  let country = "";
  let countryCities = [];

  for (let i = 0; i < countries.length; i++) {
    countryCities = cities.filter(
      (city) => city.country_id === countries[i].id
    );
    for (let j = 0; j < countryCities.length; j++) {
      for (let k = 0; k < populations.length; k++) {
        if (populations[k].city_id == countryCities[j].id) {
          sum += populations[k].amount;
        }
      }
    }
    if (sum > countryPopulation) {
      country = countries[i].name;
      countryPopulation = sum;
      sum = 0;
    } else {
      sum = 0;
    }
  }

  return { name: country, population: countryPopulation };
};

module.exports = largestCountry;
