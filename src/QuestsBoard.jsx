import { QuestCategories } from "./App";
import Quest from "./Quest";

export default function QuestsBoard({
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
  quests,
  onAddQuest,
  setShowAddQuest,
  showAddQuest,
}) {
  return (
    <>
      <div>
        <h1>Quests Board</h1>
        <p>Create and complete your Quests to earn XP and level up.</p>
        <button onClick={() => setShowAddQuest(true)}>+ New Quest</button>
        <QuestCategories
          categories={categories}
          onAddCategory={onAddCategory}
          showAddCategory={showAddCategory}
          setShowAddCategory={setShowAddCategory}
        />
      </div>
      <Quest
        quests={quests}
        showAddQuest={showAddQuest}
        setShowAddQuest={setShowAddQuest}
        onAddQuest={onAddQuest}
        categories={categories}
      />
    </>
  );
}
