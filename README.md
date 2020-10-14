# Quixi Internship Front End Test

This should be a medium length test on your ability to execute a small front end task.

The task will be to create a decent looking form with a signature pad which will send the results to our server.

The end product should look something like the following (but add your own style and the signature pad of course) -

![Example](https://shield-health.s3-us-west-2.amazonaws.com/screencapture-demo-quixi-contracts-attestation-2020-10-11-15_24_18.png)

## The form

The form should have three inputs, a single dropdown allowing the choice between `Red`, `Blue` and `Green`, a text input for a name and finally a button to submit the form. Make the form look good to show off your front end skills, you can provide a banner at the top giving context for the form or whatever you think may be added to make it more visually appealing.

The form's data should be POST'ed to https://www.quixi.com/internship-form

The data should be of the form

```
color: Blue
name: Bruce Wayne
```



## The signature pad

Use this [library](https://github.com/szimek/signature_pad) for the signature pad. When the aforementioned form is submitted the image data should be POST'ed before the form using AJAX to https://www.quixi.com/signature_pad.

Below is what that ajax request might look like -

```javascript
let image_url = signature_pad.toDataURL();
$.ajax({
	type: "POST",
	url: "https://www.quixi.com/signature_data",
	data: {
		image_data: image_url
	}
});
```



### Note -

- These endpoints are fake so don't expect them to return any type of response or validation. 
- You have 24 hours from the time you opened the link, though the challenge should not take nearly that amount of time. Once you are done email a zip of your code to zach@quixi.com.
- Have fun!