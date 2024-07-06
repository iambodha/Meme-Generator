

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C9LeVUwz.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DTG4TIt5.js"];
export const stylesheets = ["_app/immutable/assets/2.B9czcgsk.css"];
export const fonts = [];
