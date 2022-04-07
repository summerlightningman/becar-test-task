const URL = 'https://api.currencyapi.com/v3/';
const API_KEY = '?apikey=WVLNwt7HUrAoakeKjRzUmzzl2KE0bFftpAxipny0';

enum Endpoint {
    LATEST = 'latest',
    // CONVERT = 'convert' // requires paid plan
}

const getUrl = (endpoint: string) => URL + endpoint + API_KEY;

export const getCurrencyList = () => fetch(getUrl(Endpoint.LATEST))
    .then(response => response.json())
    .then(json => json.data.keys)
    .catch(console.log);

export const convertCurrency = (from: string, to: string, amount: number | string = 1) =>
    fetch(getUrl(Endpoint.LATEST) + `&base_currency=${from}&currencies=${to}`)
        .then(response => response.json())
        .then(json => +json.data[to].value * +amount)
        .catch(console.log);

