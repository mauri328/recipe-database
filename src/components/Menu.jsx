import { useAuthStore } from "../store/useAuthStore";
import { Settings, User, LogOut } from "lucide-react";
import "./Menu.css";

export default function Menu({ onClose }) {
  const { user, logout } = useAuthStore();

  return (
    <div className="menu">
      <div className="menu-user">
        Logged in as <strong>{user.displayName}</strong>
      </div>

      <div className="menu-separator"></div>

      <button className="menu-item">
        <Settings size={16} /> App settings
      </button>
      <button className="menu-item">
        <User size={16} /> Account settings
      </button>

      <div className="menu-separator"></div>

      <button className="menu-item menu-logout" onClick={logout}>
        <LogOut size={16} /> Sign out
      </button>
    </div>
  );
}
