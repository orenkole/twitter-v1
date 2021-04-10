import {getPosts} from "../services/getPosts.js";
import {postView} from "../views/postView.js";

export class PostsList {
	constructor({
		postsData, 
		usersData, 
		deleteCardHandler, 
		showEditFormHandler,
	}) {
		this.postsData = postsData;
		this.usersData = usersData;
		const postsListHTML = `<ul class="container row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-auto"></ul>`;
		this.postsListElement = new DOMParser().parseFromString(postsListHTML, 'text/html').body.childNodes[0];

		this.postsData.forEach(postData => {
			const userData = usersData.find(user => user.id = postData.userId)
			const postElement = postView({
				postData, 
				userData, 
				deleteCardHandler, 
				showEditFormHandler
			});
			this.postsListElement.append(postElement);
		});
		return this;
	}

	render(root) {
		root.append(this.postsListElement)
	}
}