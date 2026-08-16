function getTagClass(tag) {
  const difficultyTags = ["easy", "medium", "hard", "epic", "legendary"];
  if (difficultyTags.includes(tag.toLowerCase())) {
    return `tag tag--${tag.toLowerCase()}`;
  }
  return "tag";
}

export default function QuestCard({
  quest,
  index,
  isCompleted = false,
  onCompleteQuest,
  onDeleteQuest,
  onUnCompleteQuest,
}) {
  const primaryActionLabel = isCompleted ? "UnComplete" : "Complete";
  const primaryActionHandler = isCompleted
    ? () => onUnCompleteQuest(index)
    : () => onCompleteQuest(index);

  return (
    <article
      className={`quest-card ${isCompleted ? "quest-card--completed" : ""}`}
    >
      <div className="quest-card__top">
        <h2 className="quest-card__title">{quest.title}</h2>
        <span className="quest-card__xp">+{quest.XP} XP</span>
      </div>

      {quest.description && (
        <p className="quest-card__description">{quest.description}</p>
      )}

      <div className="quest-card__tags">
        {quest.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className={getTagClass(tag)}>
            {tag}
          </span>
        ))}
      </div>

      <div className="quest-card__actions">
        <button
          type="button"
          className="btn btn--success btn--sm"
          onClick={primaryActionHandler}
        >
          {primaryActionLabel}
        </button>
        <button
          type="button"
          className="btn btn--danger btn--sm"
          onClick={() => onDeleteQuest(index)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
