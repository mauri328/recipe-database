import { useAuthStore } from "../store/useAuthStore";
import "./Header.css";

export default function Header({ onOpenSettings }) {
  const { user, login, logout } = useAuthStore();

  return (
    <header className="app-header">
      <div className="app-header-brand">
        <img src="/favicon.svg" alt="" className="app-header-logo" />
        <span className="app-header-title">Recipe Database</span>
      </div>

      <div className="app-header-actions">
        {user ? (
        <div className="app-header-actions">
          <button
            className="app-header-icon-button"
            aria-label="Settings"
            onClick={onOpenSettings}
          >
            ⚙
          </button>
          <button className="app-header-button" onClick={logout}>
            Log out
          </button>
        </div>
        ) : (
          <button
            className="app-header-button app-header-button--primary"
            onClick={login}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}
