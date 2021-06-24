var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

dotenv.config();
app.get('/', function (req, res) {
	// res.sendFile('dist/index.html')
	res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
	res.send(mockAPIResponse);
});
app.get('/sentimentAnalysis/:content', async (req, res) => {
	try {
		const text = req.params.content;

		const param = {
			txt: text,
			key: process.env.API_KEY,
			lang: 'en',
		};
		await axios({
			method: 'post',
			url: `https://api.meaningcloud.com/sentiment-2.1`,
			body: param,
			redirect: 'follow',
		}).then((result) => {
			console.log(result);
			res.send(result);
		});
	} catch (err) {
		console.log(err);
	}
});
