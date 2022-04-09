const URL = 'https://api.currencyapi.com/v3/';
const API_KEY = '?apikey=Phljq1aqChvf1wmbzunEkHcVzSj5FxNBwWbff75Y';

enum Endpoint {
    LATEST = 'latest',
    // CONVERT = 'convert' // requires paid plan
}

const getUrl = (endpoint: string) => URL + endpoint + API_KEY;

export const getLatestExchangeRates = (currency: string, currencies: string[] = []) =>
    fetch(
        getUrl(Endpoint.LATEST) +
        `&base_currency=${currency}` +
        (currencies.length ? `&currencies=${currencies.join(',')}` : '')
    )
        .then(response => {
            if (response.status === 429)
                throw new Error('Request limit exceeded')
            return response.json();
        })
        .then(json => json.data)
        .catch(e => alert(e.message));

