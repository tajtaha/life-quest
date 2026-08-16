import AddQuest from "./AddQuest";
import QuestCard from "./QuestCard";
import CompletedQuestList from "./CompletedQuestList";

export default function Quest({
  quests,
  showAddQuest,
  onAddQuest,
  categories,
  setShowAddQuest,
  activeCategory,
  onDeleteQuest,
  onCompleteQuest,
  onUnCompleteQuest,
  completedQuests,
}) {
  const filteredQuests =
    activeCategory === "All"
      ? quests
      : quests.filter(
          (quest) =>
            Array.isArray(quest.tags) && quest.tags.includes(activeCategory),
        );

  return (
    <div className="quest-list">
      {filteredQuests.length === 0 && (
        <div className="empty-state">
          <div className="empty-state__icon" aria-hidden="true">
            📜
          </div>
          <p className="empty-state__title">No quests yet</p>
          <p className="empty-state__text">
            Create your first quest to start earning XP.
          </p>
        </div>
      )}

      {filteredQuests.map((quest, index) => (
        <QuestCard
          key={index}
          quest={quest}
          index={index}
          onCompleteQuest={onCompleteQuest}
          onDeleteQuest={onDeleteQuest}
          onUnCompleteQuest={onUnCompleteQuest}
        />
      ))}

      <CompletedQuestList
        completedQuests={completedQuests}
        onUnCompleteQuest={onUnCompleteQuest}
        onDeleteQuest={onDeleteQuest}
      />

      <AddQuest
        showAddQuest={showAddQuest}
        onAddQuest={onAddQuest}
        categories={categories}
        setShowAddQuest={setShowAddQuest}
      />
    </div>
  );
}
