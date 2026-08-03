import { useAuthStore } from "../store/useAuthStore";
import "./Menu.css";

export default function Menu({ onClose }) {
  const { user, logout } = useAuthStore();

  return (
    <div className="menu">
      <button className="menu-item">App settings</button>
      <button className="menu-item">Account settings</button>

      <div className="menu-separator"></div>

      <div className="menu-user">
        Logged in as <strong>{user.displayName}</strong>
      </div>

      <button
        className="menu-item menu-logout"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}
