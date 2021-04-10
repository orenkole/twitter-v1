export function createBtnView({element, showCreatePostModal}) {
	const createBtnWrapperHTML = `
		<div class="container mt-4">
			<button type="button" class="btn btn-primary">Create New Post</button>
		</div>
	`;
	const createBtnWrapperElement = new DOMParser().parseFromString(createBtnWrapperHTML, 'text/html').body.childNodes[0];
	const createBtnElement = createBtnWrapperElement.querySelector("button");
	createBtnElement.addEventListener("click", (e) => {
		showCreatePostModal();
	});
	element.append(createBtnWrapperElement);
	return createBtnElement;
}