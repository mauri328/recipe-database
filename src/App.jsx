import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { useRecipeStore } from "./store/useRecipeStore";

export default function App() {
  const { user, authReady, login, logout } = useAuthStore();
  const { recipes, loading, subscribeToUserRecipes } = useRecipeStore();

  useEffect(() => {
    if (user) subscribeToUserRecipes(user.uid);
  }, [user]);

  if (!authReady) return <p>Loading...</p>;

  if (!user) {
    return (
      <div>
        <p>Please log in.</p>
        <button onClick={login}>Sign in with Google</button>
      </div>
    );
  }

  return (
    <div>
      <header>
        <span>{user.displayName}</span>
        <button onClick={logout}>Log out</button>
      </header>

      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <ul>
          {[...recipes.values()].map((r) => (
            <li key={r.id}>{r.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
