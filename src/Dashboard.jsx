import { LevelOverview, OverviewCard } from "./App";

export default function Dashboard({
  level,
  nextLevelXPNeeded,
  currentLevelXPNeeded,
  XP,
}) {
  return (
    <div className="dashboard">
      <LevelOverview
        level={level}
        nextLevelXPNeeded={nextLevelXPNeeded}
        currentLevelXPNeeded={currentLevelXPNeeded}
        XP={XP}
      />
      <div className="stats-grid">
        <OverviewCard
          variant="quests"
          value={0}
          label="Active Quests"
          sublabel="In progress"
        />
        <OverviewCard
          variant="completed"
          value={0}
          label="Completed"
          sublabel="All time"
        />
        <OverviewCard
          variant="streak"
          value={0}
          label="Day Streak"
          sublabel="Keep it going"
        />
        <OverviewCard
          variant="xp"
          value={XP}
          label="Total XP"
          sublabel="Earned so far"
        />
      </div>
    </div>
  );
}
