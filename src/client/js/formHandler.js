import axios from 'axios';

async function handleSubmit(event) {
	event.preventDefault();
	console.log('::: Form Submitted :::');
	// check what text was put into the form field
	let formText = document.getElementById('name').value;
	// checkForName(formText);

	await axios
		.get(`http://localhost:8080/sentimentAnalysis/${formText}`)
		.then(function (res) {
			console.log(res);
			document.getElementById('results').innerHTML = res;
		});
}

export { handleSubmit };
