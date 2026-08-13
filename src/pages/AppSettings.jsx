import { useThemeStore } from "../store/useThemeStore";

export default function AppSettings() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <section className="settings-section">
      <h1>App settings</h1>

      <div className="settings-row">
        <div>
          <h2>Theme</h2>
          <p>Switch between light and dark mode.</p>
        </div>
        <button
          className="theme-toggle"
          role="switch"
          aria-checked={theme === "dark"}
          onClick={toggleTheme}
        >
          <span className="theme-toggle-thumb" />
        </button>
      </div>
    </section>
  );
}