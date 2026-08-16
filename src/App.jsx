import { useState } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import QuestsBoard from "./QuestsBoard";
import Category from "./Category";
import Achievements from "./AchievementsBoard";
import { useTheme } from "./useTheme";

export default function App() {
  const [level, setLevel] = useState(1);
  const [XP, setXP] = useState(0);
  const [currentLevelXPNeeded, setXPNeeded] = useState(100);
  const nextLevelXPNeeded = currentLevelXPNeeded * 1.5;
  const [quests, setQuests] = useState([]);
  const [completedQuests, setCompletedQuests] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [showAddQuest, setShowAddQuest] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddAchievement, setShowAddAchievement] = useState(false);
  const [tabs, setTabs] = useState("Dashboard");
  const { theme, toggleTheme } = useTheme();

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

  function handleDeleteQuest(index) {
    if (quests[index]) {
      setQuests((prevQuests) => prevQuests.filter((_, i) => i !== index));
    } else {
      setCompletedQuests((prevCompletedQuests) =>
        prevCompletedQuests.filter((_, i) => i !== index),
      );
    }
  }

  function handleCompleteQuest(index) {
    const questToComplete = quests[index];

    if (!questToComplete) return;

    setCompletedQuests((prevCompletedQuests) => [
      ...prevCompletedQuests,
      questToComplete,
    ]);
    setQuests((prevQuests) => prevQuests.filter((_, i) => i !== index));
  }

  function handleUnCompleteQuest(index) {
    const questToUncomplete = completedQuests[index];

    if (!questToUncomplete) return;

    setQuests((prevQuests) => [...prevQuests, questToUncomplete]);
    setCompletedQuests((prevCompletedQuests) =>
      prevCompletedQuests.filter((_, i) => i !== index),
    );
  }

  function handleAddAchievements(title, description, rank) {
    setAchievements((prevAchievements) => [
      ...prevAchievements,
      {
        title: title,
        description: description,
        rank: rank,
      },
    ]);
    setShowAddAchievement(false);
  }

  return (
    <div className="app">
      <NavBar
        level={level}
        setTabs={setTabs}
        activeTab={tabs}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="main">
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
            onDeleteQuest={handleDeleteQuest}
            onCompleteQuest={handleCompleteQuest}
            setShowAddQuest={setShowAddQuest}
            showAddQuest={showAddQuest}
            completedQuests={completedQuests}
            onUnCompleteQuest={handleUnCompleteQuest}
          />
        )}
        {tabs === "Achievements" && (
          <Achievements
            setShowAddAchievement={setShowAddAchievement}
            showAddAchievement={showAddAchievement}
            onAddAchievement={handleAddAchievements}
            achievements={achievements}
          />
        )}
      </main>
    </div>
  );
}

export function LevelOverview({
  level,
  nextLevelXPNeeded,
  currentLevelXPNeeded,
  XP,
}) {
  const progressPercent = Math.min((XP / currentLevelXPNeeded) * 100, 100);

  return (
    <section className="level-overview">
      <div className="level-overview__header">
        <div>
          <span className="level-overview__badge">Adventurer</span>
          <h2 className="level-overview__level">Level {level}</h2>
          <p className="level-overview__stats">
            0 quests cleared · 0 achievements · {XP} XP earned
          </p>
        </div>
      </div>
      <div className="level-overview__progress-section">
        <div className="level-overview__progress-label">
          <span>
            {XP} / {nextLevelXPNeeded} XP
          </span>
          <span className="level-overview__progress-range">
            Lvl {level} → {level + 1}
          </span>
        </div>
        <div
          className="level-overview__progress-bar"
          role="progressbar"
          aria-valuenow={XP}
          aria-valuemin={0}
          aria-valuemax={currentLevelXPNeeded}
        >
          <div
            className="level-overview__progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
}

const CARD_VARIANTS = {
  quests: { icon: "⚔", iconClass: "overview-card__icon--quests" },
  completed: { icon: "✓", iconClass: "overview-card__icon--completed" },
  streak: { icon: "🔥", iconClass: "overview-card__icon--streak" },
  xp: { icon: "★", iconClass: "overview-card__icon--xp" },
};

export function OverviewCard({
  variant = "quests",
  value = 0,
  label,
  sublabel,
}) {
  const { icon, iconClass } = CARD_VARIANTS[variant] ?? CARD_VARIANTS.quests;

  return (
    <div className="overview-card">
      <div className={`overview-card__icon ${iconClass}`}>{icon}</div>
      <h3 className="overview-card__value">{value}</h3>
      <p className="overview-card__label">{label}</p>
      <p className="overview-card__sublabel">{sublabel}</p>
    </div>
  );
}

export function QuestCategories({
  activeCategory,
  setActiveCategory,
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
}) {
  return (
    <Category
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      categories={categories}
      onAddCategory={onAddCategory}
      showAddCategory={showAddCategory}
      setShowAddCategory={setShowAddCategory}
    />
  );
}
