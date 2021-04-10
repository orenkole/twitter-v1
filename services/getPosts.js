export async function getPosts() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		return data
	} catch {
		console.log("Error");
	} 
}