export async function editPost(editFormData) {
	// try {
		const requestObj = Object.fromEntries(editFormData)
		const requestBody = JSON.stringify(requestObj);
		console.log("edited object: ", requestObj);
		requestObj.id = "1";
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${requestObj.id	}`, {
		  method: 'PUT',
		  body: requestBody,
	      headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		});
		const data = await response.json();
		console.log("RECEIVED EDITED: ", data)
		return data
	// } catch(err) {
	// 	console.log(err.message);
	// } 
}