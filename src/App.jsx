import { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useRecipeStore } from "./store/useRecipeStore";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import SettingsPage from "./pages/SettingsPage";
import AppSettings from "./pages/AppSettings";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  const { user, authReady } = useAuthStore();
  const { recipes, loading, subscribeToUserRecipes } = useRecipeStore();

  useEffect(() => {
    if (user) subscribeToUserRecipes(user.uid);
  }, [user]);

  if (!authReady) return <p>Loading...</p>;

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            !user ? (
              <LandingPage />
            ) : loading ? (
              <p>Loading recipes...</p>
            ) : (
              <ul>
                {[...recipes.values()].map((r) => (
                  <li key={r.id}>{r.title}</li>
                ))}
              </ul>
            )
          }
        />
        <Route path="/settings" element={<SettingsPage />}>
          <Route index element={<Navigate to="app" replace />} />
          <Route path="app" element={<AppSettings />} />
          <Route path="account" element={<AccountSettings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}