import AddAchivement from "./AddAchievement";

export default function Achievements({
  setShowAddAchievement,
  showAddAchievement,
  onAddAchievement,
  achievements,
}) {
  return (
    <>
      <button onClick={() => setShowAddAchievement(true)}>
        Add Achievements
      </button>
      <AddAchivement
        setShowAddAchievement={setShowAddAchievement}
        showAddAchievement={showAddAchievement}
        onAddAchievement={onAddAchievement}
      />
      <Achievements achievements={achievements} />
    </>
  );
}
