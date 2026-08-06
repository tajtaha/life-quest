export default function NavBar({ level, setTabs }) {
  return (
    <>
      <div>
        <span>Icon</span>
        <h1>Life Quest</h1>
      </div>

      <div>
        <button onClick={() => setTabs("Dashboard")}>Dashboard</button>
        <button onClick={() => setTabs("Quests")}>Quests</button>
        <button onClick={() => setTabs("Achievements")}>Achievements</button>
      </div>

      <div>
        <p>Taj</p>
        <p>lvl {level}</p>
        <span>ProfileImg</span>
      </div>
    </>
  );
}
