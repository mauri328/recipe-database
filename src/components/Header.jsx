import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import Menu from "./Menu";
import "./Header.css";

export default function Header({ onNavigateSettings }) {
  const { user, login, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  // close the dropdown on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="app-header">
      <div className="app-header-brand">
        <img src="/favicon.svg" alt="" className="app-header-logo" />
        <span className="app-header-title">RecipeDB</span>
      </div>

      {user ? (
        <div className="app-header-actions" ref={wrapperRef}>
          <button
            className="app-header-button app-header-settings-trigger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-haspopup="menu"
          >
            <span aria-hidden="true">⚙</span>
            <span className="app-header-settings-label">Settings</span>
          </button>

          {menuOpen && (
            <Menu
              user={user}
              onNavigate={(tab) => {
                setMenuOpen(false);
                onNavigateSettings(tab);
              }}
              onLogout={logout}
            />
          )}
        </div>
      ) : (
        <div className="app-header-actions">
          <button
            className="app-header-button app-header-button--primary"
            onClick={login}
          >
            Sign in with Google
          </button>
        </div>
      )}
    </header>
  );
}
