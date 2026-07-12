// -- recipe state store --
// Replaces the old LocalRecipeStorage class. Firestore's persistentLocalCache
// (see lib/firebase.js) already handles offline caching + sync for us, so
// this store just mirrors query results into app state.

import { create } from "zustand";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "../lib/firebase";

export const useRecipeStore = create((set, get) => ({
  recipes: new Map(), // id -> recipe object
  loading: false,
  unsubscribe: null,

  // Call once after login. Sets up a live listener (works offline too --
  // onSnapshot fires from local cache immediately, then again when synced).
  subscribeToUserRecipes(uid) {
    get().unsubscribe?.(); // clean up any previous listener
    set({ loading: true });

    const q = query(
      collection(firestore, "recipes"),
      where("createdByUser", "==", uid)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const map = new Map();
      snapshot.forEach((d) => map.set(d.id, { id: d.id, ...d.data() }));
      set({ recipes: map, loading: false });
    });

    set({ unsubscribe: unsub });
  },

  async addRecipe(recipeData) {
    await addDoc(collection(firestore, "recipes"), recipeData);
    // no manual state update needed -- onSnapshot listener picks it up
  },

  async updateRecipe(id, changes) {
    await updateDoc(doc(firestore, "recipes", id), changes);
  },

  async deleteRecipe(id) {
    await deleteDoc(doc(firestore, "recipes", id));
  },

  getRecipe(id) {
    return get().recipes.get(id);
  },
}));
