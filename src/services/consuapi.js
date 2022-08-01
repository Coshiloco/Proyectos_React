const api= "https://jsonplaceholder.typicode.com/posts" // AHI VAN MIS APIS

export async function getPosts() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}