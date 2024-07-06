// place files you want to import through the `$lib` alias in this folder.
export async function getMemeUrl() {
    try {
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching meme:', error);
        return null;
    }
}
