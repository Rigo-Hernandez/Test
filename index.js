// Initialize signature pade
var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
	backgroundColor: 'rgba(255, 255, 255, 0)',
	penColor: 'rgb(0, 0, 0)',
});

// Dom Query the form by id
const form = document.getElementById('mainform');

// Added submit event of the form
form.addEventListener('submit', function handleForm(e) {
	// Prevent the default behaviour of the form submit
	e.preventDefault();

	//Get all of the value from color optuon and name input filed
	const color = e.target['color'].value;
	const name = e.target['fullname'].value;

	// get signature pad image data
	let image_url = signaturePad.toDataURL();

	if (!color || color === '') {
		// Show the error message if the color not selected
		document.getElementById('errcolor').style.display = 'block';
	} else if (!name || name === '') {
		// Show the error message if the name input field is empty
		document.getElementById('errname').style.display = 'block';
	} else {
		// console the form data what we are sending to make sure
		console.log('Color: ', color);
		console.log('Name: ', name);

		// fordata object that we get from form to send it
		let formdata = { color, name };

		// sending form data to the url endpoint with post method via ajax
		$.ajax({
			url: ' https://www.quixi.com/internship-form',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data: JSON.stringify(formdata),
			success: function (res) {
				console.log(res);
			},
			error: function (err) {
				console.log(err);
			},
		});

		// sending signature pad image data to the url endpoint with post method via ajax
		$.ajax({
			type: 'POST',
			url: 'https://www.quixi.com/signature_data',
			data: { image_data: image_url },
			success: function (res) {
				console.log(res);
			},
			error: function (err) {
				console.log(err);
			},
		});
	}
});
