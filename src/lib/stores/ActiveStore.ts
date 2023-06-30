import { writable } from 'svelte/store';
import type { Character } from '$lib/types/types';
export const ssr = false;

const ActiveStore = writable<Character | null>();
export default ActiveStore;
