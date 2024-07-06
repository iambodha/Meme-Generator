<script>
    import { onMount } from 'svelte';
    import { getMemeUrl } from '$lib/index';
    import '../global.css';

    let memeUrl = '';

    onMount(async () => {
        memeUrl = await getMemeUrl();
    });

    // Define the function to change the image URL
    async function changeImage() {
        memeUrl = await getMemeUrl();
    }
</script>

<main>
    <h1 class="poppins-regular">Meme Generator</h1>
    <h3 class="kanit-regular">A place to find them all</h3>
    <img class="meme-image" src={memeUrl} alt="Meme Image"/>
    <button on:click={changeImage}>Get Another Meme</button>
</main>
