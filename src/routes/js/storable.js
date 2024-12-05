import { writable } from 'svelte/store'

export function storable(key, initialValue) {
   const isBrowser = typeof window !== 'undefined';
 
   // Initialize store value from localStorage if available
   const storedValue = isBrowser && localStorage.getItem(key)
     ? JSON.parse(localStorage.getItem(key))
     : initialValue;
 
   const store = writable(storedValue);
 
   const { subscribe, set, update } = store;
 
   // Sync store changes with localStorage
   return {
     subscribe,
     set: (n) => {
       if (isBrowser) {
         // Persist the value in localStorage (ensure it's an integer)
         localStorage.setItem(key, JSON.stringify(n));
       }
       set(n);
     },
     update: (cb) => {
       store.update((value) => {
         const updatedValue = cb(value);
         if (isBrowser) {
           // Persist the updated value in localStorage (ensure it's an integer)
           localStorage.setItem(key, JSON.stringify(updatedValue));
         }
         return updatedValue;
       });
     }
   };
 }