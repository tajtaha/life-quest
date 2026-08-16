import QuestCard from "./QuestCard";

export default function CompletedQuestList({
  completedQuests,
  onUnCompleteQuest,
  onDeleteQuest,
}) {
  if (completedQuests.length === 0) {
    return null;
  }

  return (
    <div className="completed-quest-list">
      {completedQuests.map((quest, index) => (
        <QuestCard
          key={index}
          quest={quest}
          index={index}
          isCompleted={true}
          onCompleteQuest={() => {}}
          onDeleteQuest={onDeleteQuest}
          onUnCompleteQuest={onUnCompleteQuest}
        />
      ))}
    </div>
  );
}
