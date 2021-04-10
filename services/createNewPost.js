export async function createNewPost(newPostFormData) {
	try {
		const requestBody = JSON.stringify(Object.fromEntries(newPostFormData))
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		  method: 'POST',
		  body: requestBody,
	      headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		});
		const data = await response.json();
		console.log("RECEIVED: ", data)
		return data
	} catch(err) {
		console.log(err.message);
	} 
}