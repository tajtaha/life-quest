import { useState } from "react";

export default function AddAchivement({
  onAddAchievement,
  setShowAddAchievement,
  showAddAchievement,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("iron");

  if (showAddAchievement === false) {
    return null;
  }

  return (
    <div>
      <label htmlFor="title" className="form-label">
        Achievement Title
      </label>
      <input
        id="title"
        className="form-input"
        placeholder="Title of the achievement"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <input
        id="description"
        className="form-input"
        placeholder="e.g. Do 100 push-ups in a day"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="rank" className="form-label">
        Rank
      </label>
      <select
        id="rank"
        className="form-select"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      >
        <option value="iron">Iron</option>
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
      </select>

      <button onClick={() => setShowAddAchievement(false)}>Cancel</button>
      <button onClick={() => onAddAchievement(title, description, rank)}>
        Add +
      </button>
    </div>
  );
}
