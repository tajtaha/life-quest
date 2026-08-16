export default function NavBar({ level, setTabs, activeTab, theme, onToggleTheme }) {
  const tabs = [
    { id: "Dashboard", label: "Dashboard" },
    { id: "Quests", label: "Quests" },
    { id: "Achievements", label: "Achievements" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo" aria-hidden="true">
          ⚔
        </span>
        <h1 className="navbar__title">Life Quest</h1>
      </div>

      <nav className="navbar__tabs" aria-label="Main navigation">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`navbar__tab${activeTab === id ? " navbar__tab--active" : ""}`}
            onClick={() => setTabs(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="navbar__profile">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <div className="navbar__profile-info">
          <p className="navbar__profile-name">Taj</p>
          <p className="navbar__profile-level">Level {level}</p>
        </div>
        <span className="navbar__avatar" aria-label="Profile">
          T
        </span>
      </div>
    </header>
  );
}
