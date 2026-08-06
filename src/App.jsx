import { useState } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import QuestsBoard from "./QuestsBoard";
import Category from "./Category";

export default function App() {
  const [level, setLevel] = useState(1);
  const [XP, setXP] = useState(0);
  const [currentLevelXPNeeded, setXPNeeded] = useState(100);
  const nextLevelXPNeeded = currentLevelXPNeeded * 1.5;
  const [quests, setQuests] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [showAddQuest, setShowAddQuest] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [tabs, setTabs] = useState("Dashboard");

  function handleAddCategories(categoryName) {
    setCategories([...categories, categoryName]);
  }

  function handleAddQuests(title, description, category, XP, difficulty) {
    setQuests((prevQuests) => [
      ...prevQuests,
      {
        title: title,
        description: description,
        tags: [category, difficulty],
        XP: XP,
      },
    ]);
  }

  return (
    <div>
      <NavBar level={level} setTabs={setTabs} />
      {tabs === "Dashboard" && (
        <Dashboard
          level={level}
          nextLevelXPNeeded={nextLevelXPNeeded}
          currentLevelXPNeeded={currentLevelXPNeeded}
          XP={XP}
        />
      )}
      {tabs === "Quests" && (
        <QuestsBoard
          categories={categories}
          onAddCategory={handleAddCategories}
          showAddCategory={showAddCategory}
          setShowAddCategory={setShowAddCategory}
          quests={quests}
          onAddQuest={handleAddQuests}
          setShowAddQuest={setShowAddQuest}
          showAddQuest={showAddQuest}
        />
      )}
      {/* {tabs === "Achievements" && (
        <Achievements />
      )} */}
    </div>
  );
}

export function LevelOverview({
  level,
  nextLevelXPNeeded,
  currentLevelXPNeeded,
  XP,
}) {
  return (
    <div>
      <p>Level {level}</p>
      <p>0 quests cleared . 0 achievements . {XP} XP earned</p>
      <p>
        lvl {level} - {level + 1}
      </p>
      <label htmlFor="progress">
        {XP} / {nextLevelXPNeeded} XP
      </label>
      <progress id="progress" value={XP} max={currentLevelXPNeeded}>
        32%
      </progress>
    </div>
  );
}

export function OverviewCard() {
  return (
    <div>
      <h2>0</h2>
      <p>description</p>
      <p>had done</p>
    </div>
  );
}

export function QuestCategories({
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
}) {
  return (
    <Category
      categories={categories}
      onAddCategory={onAddCategory}
      showAddCategory={showAddCategory}
      setShowAddCategory={setShowAddCategory}
    />
  );
}
