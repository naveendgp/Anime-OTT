import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://myanimelist.p.rapidapi.com/anime/1535',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default options