class Spinner {
	constructor() {
		const spinnerHTML = "<p class='loader'>Loading posts...</p>"
		this.spinnerHtmlElement = new DOMParser().parseFromString(spinnerHTML, 'text/html').body.childNodes[0];
		return this;
	}

	render(root) {
		root.append(this.spinnerHtmlElement);
	}

	removeElement() {
		this.spinnerHtmlElement.remove();
	}
}

export {Spinner}