import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let memeUrl = "";
  return `<main><h1 class="poppins-regular" data-svelte-h="svelte-mpfg0k">Meme Generator</h1> <h3 class="kanit-regular" data-svelte-h="svelte-ky28v0">A place to find them all</h3> <img class="meme-image"${add_attribute("src", memeUrl)} alt="Meme Image"> <button data-svelte-h="svelte-k1cze6">Get Another Meme</button></main>`;
});
export {
  Page as default
};
