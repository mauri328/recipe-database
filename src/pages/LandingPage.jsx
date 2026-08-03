import { useAuthStore } from "../store/useAuthStore";
import "./LandingPage.css";

export default function LandingPage() {
  const { login } = useAuthStore();

  return (
    <main className="landing">
      <section className="landing-hero">
        <h1>Coming soon - Recipe Database</h1>
        {/* <h1>Your recipes, always in your pocket.</h1> */}
        <p className="landing-subtitle">
          Save recipes once, find them offline anywhere, and keep every device
          in sync automatically the moment you're back online.
        </p>
        <button className="landing-cta" onClick={login}>
          Sign in with Google to get started
        </button>
      </section>

      <section className="landing-features">
        <div className="landing-feature">
          <h2>Works offline</h2>
          <p>
            Open, search, and edit recipes with no connection — changes sync
            automatically once you're back online.
          </p>
        </div>
        <div className="landing-feature">
          <h2>Synced everywhere</h2>
          <p>Add a recipe on your laptop, and view it on your phone while cooking.</p>
        </div>
        <div className="landing-feature">
          <h2>Built for search</h2>
          <p>Find what you need by ingredient, tag, or cuisine in seconds.</p>
        </div>
      </section>
    </main>
  );
}
