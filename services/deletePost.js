export async function deletePost(postId) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${postId}`,
			{
				method: "DELETE"
			}
		);
		const data = await response.json();
		return data
	} catch {
		console.log("Error");
	} 
}