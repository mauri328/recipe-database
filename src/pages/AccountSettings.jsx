import { useAuthStore } from "../store/useAuthStore";
import { LogOut } from "lucide-react";

export default function AccountSettings() {
  const { user, logout } = useAuthStore();

  return (
    <section className="settings-section">
      <h1>Account settings</h1>

      <div className="settings-row">
        <div>
          <h2>Logged in as</h2>
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
        <button className="settings-signout" onClick={logout}>
          <LogOut size={16} /> Sign out
        </button>
      </div>
    </section>
  );
}