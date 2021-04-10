export function createPostModalView({element, createPostHandler, hideCreatePostModal}) {
	const createPostModalHTML = `
		<div class="p-5">
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
			    		value=""
		    		>
  					<label for="postBody">Текст поста</label>
		    		<textarea 
		    			class="form-control mb-3" 
		    			id="postBody"
		    			name="body"
		    			value=""
	    			></textarea>
			    </div>
			  	<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	`;
	const createPostModalElement = new DOMParser().parseFromString(createPostModalHTML, 'text/html').body.childNodes[0];
	createPostModalElement.style.display = "none";
	createPostModalElement.style.position = "fixed";
	createPostModalElement.style.top = 0;
	createPostModalElement.style.left = 0;
	createPostModalElement.style["z-index"] = 1;
	createPostModalElement.style.width = "100%";
	createPostModalElement.style.height = "100vh";
	createPostModalElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	createPostModalElement.addEventListener("click", hideCreatePostModal)
	const createPostFormElement = createPostModalElement.querySelector("form");
	createPostFormElement.style.backgroundColor = "white";
	createPostFormElement.style.height = "max-content";
	createPostFormElement.addEventListener("submit", (e) => {
		e.preventDefault();
		createPostHandler(e);
	});
	element.append(createPostModalElement);
	return createPostModalElement;
}