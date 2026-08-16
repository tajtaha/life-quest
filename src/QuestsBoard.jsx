import { QuestCategories } from "./App";
import Quest from "./Quest";
import { useState } from "react";

export default function QuestsBoard({
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
  quests,
  onAddQuest,
  setShowAddQuest,
  onDeleteQuest,
  showAddQuest,
  onCompleteQuest,
  onUnCompleteQuest,
  completedQuests,
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
      <div className="quests-board__header">
        <div className="page-header">
          <h1>Quests Board</h1>
          <p>Create and complete your quests to earn XP and level up.</p>
        </div>
        <div className="quests-board__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setShowAddQuest(true)}
          >
            + New Quest
          </button>
          <QuestCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
            onAddCategory={onAddCategory}
            showAddCategory={showAddCategory}
            setShowAddCategory={setShowAddCategory}
          />
        </div>
      </div>
      <Quest
        quests={quests}
        showAddQuest={showAddQuest}
        setShowAddQuest={setShowAddQuest}
        onAddQuest={onAddQuest}
        categories={categories}
        onDeleteQuest={onDeleteQuest}
        activeCategory={activeCategory}
        onCompleteQuest={onCompleteQuest}
        onUnCompleteQuest={onUnCompleteQuest}
        completedQuests={completedQuests}
      />
    </>
  );
}
