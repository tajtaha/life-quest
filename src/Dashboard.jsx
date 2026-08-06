import { LevelOverview, OverviewCard } from "./App";

export default function Dashboard({
  level,
  nextLevelXPNeeded,
  currentLevelXPNeeded,
  XP,
}) {
  return (
    <>
      <LevelOverview
        level={level}
        nextLevelXPNeeded={nextLevelXPNeeded}
        currentLevelXPNeeded={currentLevelXPNeeded}
        XP={XP}
      />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </>
  );
}
