// -- auth state store --

import { create } from "zustand";
import { watchAuthState, loginWithGoogle, logout } from "../lib/firebase";

export const useAuthStore = create((set) => ({
  user: null,
  authReady: false, // true once Firebase has reported initial state

  login: () => loginWithGoogle(),
  logout: () => logout(),
}));

// Start listening immediately; keep store in sync with Firebase auth.
watchAuthState((user) => {
  useAuthStore.setState({ user, authReady: true });
});
