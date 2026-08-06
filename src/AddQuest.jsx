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

  return (
    <div>
      <h1>New Quest</h1>
      <button onClick={() => setShowAddQuest(false)}>X</button>

      <input
        id="title"
        placeholder="e.g. Run 5km before work"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="title">QUEST TITLE</label>

      <input
        id="description"
        placeholder="Give a description about the Quest ... "
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="description">DESCRIPTION (OPTIONAL)</label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="category">CATEGORY</label>

      <select
        id="difficulty"
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        {Object.entries(defaultXP).map(([difficulty, xp]) => (
          <option key={difficulty} value={difficulty}>
            {difficulty} ({xp} XP)
          </option>
        ))}
      </select>
      <label htmlFor="difficulty">DEFAULT XP</label>

      <input placeholder={defaultXPValue} id="difficulty" />
      <label htmlFor="difficulty">
        XP REWARD (SUGGESTED: {defaultXPValue})
      </label>

      <button
        onClick={() =>
          onAddQuest(
            title,
            description,
            selectedCategory,
            defaultXPValue,
            selectedDifficulty,
          )
        }
      >
        Add Quest
      </button>
    </div>
  );
}
