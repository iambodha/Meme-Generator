

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CiN-epYu.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DTG4TIt5.js","_app/immutable/chunks/entry.DTXU7beL.js"];
export const stylesheets = [];
export const fonts = [];
