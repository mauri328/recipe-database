import { Link, NavLink, Outlet } from "react-router-dom";
import "./SettingsPage.css";

export default function SettingsPage() {
  return (
    <div className="settings-layout">
      <nav className="settings-sidebar">
        <Link to="/" className="settings-back">← Back</Link>
        <NavLink
          to="/settings/app"
          className={({ isActive }) =>
            isActive ? "settings-nav-item is-active" : "settings-nav-item"
          }
        >
          App settings
        </NavLink>
        <NavLink
          to="/settings/account"
          className={({ isActive }) =>
            isActive ? "settings-nav-item is-active" : "settings-nav-item"
          }
        >
          Account settings
        </NavLink>
      </nav>

      <main className="settings-content">
        <Outlet />
      </main>
    </div>
  );
}