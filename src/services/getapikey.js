const fetch = require('node-fetch');

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dd798beb68msh534ce96c4d0d31fp1f201ajsn84c0fc845b95',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));