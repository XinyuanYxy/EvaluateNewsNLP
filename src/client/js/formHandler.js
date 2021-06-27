async function handleSubmit(event) {
	event.preventDefault();
	console.log('::: Form Submitted :::');
	// check what text was put into the form field
	let formText = document.getElementById('txt').value;
	if (Client.checkForInput(formText)) {
		try {
			await axios
				.get(`http://localhost:8080/sentimentAnalysis/${formText}`)
				.then(function (res) {
					document.getElementById(
						'results'
					).innerHTML = `<div>confidence: ${res.data.confidence}<div>
				<div>agreement: ${res.data.agreement}<div>
				<div>irony: ${res.data.irony}<div>
				<div>model: ${res.data.model}<div>
				<div>score_tag: ${res.data.score_tag}<div>`;
				});
		} catch (error) {
			console.log(error);
		}
	} else {
		alert('please enter a valid input');
	}
}

export { handleSubmit };
