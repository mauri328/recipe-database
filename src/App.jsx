import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { useRecipeStore } from "./store/useRecipeStore";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Menu from "./components/Menu";


export default function App() {
  const { user, authReady } = useAuthStore();
  const { recipes, loading, subscribeToUserRecipes } = useRecipeStore();

  useEffect(() => {
    if (user) subscribeToUserRecipes(user.uid);
  }, [user]);

  if (!authReady) return <p>Loading...</p>;

  return (
    <>
      <Header onOpenSettings={() => console.log("open settings — TODO")} />

      {!user ? (
        <LandingPage />
      ) : loading ? (
        <p>Loading recipes...</p>
      ) : (
        <ul>
          {[...recipes.values()].map((r) => (
            <li key={r.id}>{r.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
