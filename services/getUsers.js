export async function getUsers() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	if(response.ok) {
		const data = await response.json();
		return data
	}
	throw new Error(`Failed to fetch users, ${response}`);
}