import { useState } from "react";

export default function AddQuest({
  setShowAddQuest,
  showAddQuest,
  onAddQuest,
  categories,
}) {
  const defaultXP = {
    easy: 50,
    medium: 100,
    hard: 175,
    epic: 300,
    legendary: 500,
  };

  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const defaultXPValue = defaultXP[selectedDifficulty];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  if (showAddQuest === false) {
    return null;
  }

  function handleSubmit() {
    onAddQuest(
      title,
      description,
      selectedCategory,
      defaultXPValue,
      selectedDifficulty,
    );
    setShowAddQuest(false);
    setTitle("");
    setDescription("");
    setSelectedDifficulty("easy");
    setSelectedCategory(categories[0]);
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && setShowAddQuest(false)}
    >
      <div className="modal" role="dialog" aria-labelledby="new-quest-title">
        <div className="modal__header">
          <h2 id="new-quest-title" className="modal__title">
            New Quest
          </h2>
          <button
            type="button"
            className="modal__close"
            onClick={() => setShowAddQuest(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="modal__body">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Quest Title
            </label>
            <input
              id="title"
              className="form-input"
              placeholder="e.g. Run 5km before work"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description (optional)
            </label>
            <input
              id="description"
              className="form-input"
              placeholder="Give a description about the quest..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="difficulty" className="form-label">
              Difficulty
            </label>
            <select
              id="difficulty"
              className="form-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {Object.entries(defaultXP).map(([difficulty, xp]) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty} ({xp} XP)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="xp-reward" className="form-label">
              XP Reward (suggested: {defaultXPValue})
            </label>
            <input
              id="xp-reward"
              className="form-input"
              readOnly
              value={defaultXPValue}
            />
          </div>
        </div>

        <div className="modal__footer">
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => setShowAddQuest(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleSubmit}
            disabled={!title.trim()}
          >
            Add Quest
          </button>
        </div>
      </div>
    </div>
  );
}
