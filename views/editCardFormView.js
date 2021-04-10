export function editCardFormView({
	postElement, 
	postData,
	userData,
	updatePost,
}) {
	const formHTML = `
			<form class="p-3">
				<div class="mb-3">
			    	<label 
			    		for="postTitle" 
		    			class="form-label"
		    		>Заголовок поста</label>
			    	<input
			    		type="text" 
			    		class="form-control" 
			    		id="postTitle" 
			    		aria-describedby="input title"
			    		name="title"
			    		value="${postData.title}"
		    		>
  					<label for="postBody">Текст поста</label>
		    		<textarea 
		    			class="form-control mb-3" 
		    			id="postBody"
		    			name="body"
	    			>${postData.body}</textarea>
			    </div>
			  	<button type="submit" class="btn btn-primary save-btn">Save</button>
			</form>
		`;

	const formElement = new DOMParser().parseFromString(formHTML, 'text/html').body.childNodes[0];
	formElement.addEventListener("submit", (e) => {
		e.preventDefault();
		updatePost({
			postElement,
			formElement, 
			postData, 
			userData
		});
	})
	return formElement;
}