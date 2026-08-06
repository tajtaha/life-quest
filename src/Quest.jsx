import AddQuest from "./AddQuest";

export default function Quest({
  quests,
  showAddQuest,
  onAddQuest,
  categories,
  setShowAddQuest,
}) {
  return (
    <div>
      {quests.map((quest, index) => (
        <div key={index}>
          <h2>{quest.title}</h2>
          <p>{quest.description}</p>
          {quest.tags.map((tag, index) => (
            <span key={index}> {tag} </span>
          ))}
          <p>+{quest.XP} XP</p>
          <button>Delete</button>
          <button>Complete</button>
        </div>
      ))}
      <AddQuest
        showAddQuest={showAddQuest}
        onAddQuest={onAddQuest}
        categories={categories}
        setShowAddQuest={setShowAddQuest}
      />
    </div>
  );
}
