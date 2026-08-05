import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(1);
  const [XP, setXP] = useState(0);
  const [currentLevelXPNeeded, setXPNeeded] = useState(100);
  const nextLevelXPNeeded = currentLevelXPNeeded * 1.5;
  const [quests, setQuests] = useState({});
  const [categories, setCategories] = useState(["All"]);
  const [showAddQuest, setShowAddQuest] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [tabs, setTabs] = useState("Dashboard");
  const defaultXP = {
    easy: 50,
    medium: 100,
    hard: 175,
    epic: 300,
    legendary: 500,
  };

  function handleAddCategories(categoryName) {
    setCategories([...categories, categoryName]);
  }

  function handleAddQuests(title, description = "", category, XP) {
    setQuests((prevQuests) => [
      ...prevQuests,
      {
        title: title,
        description: description,
        tags: [category],
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
          showAddQuest={showAddQuest}
        />
      )}
      {/* {tabs === "Achievements" && (
        <Achievements />
      )} */}
    </div>
  );
}

function NavBar({ level, setTabs }) {
  return (
    <>
      <div>
        <span>Icon</span>
        <h1>Life Quest</h1>
      </div>

      <div>
        <button onClick={() => setTabs("Dashboard")}>Dashboard</button>
        <button onClick={() => setTabs("Quests")}>Quests</button>
        <button onClick={() => setTabs("Achievements")}>Achievements</button>
      </div>

      <div>
        <p>Taj</p>
        <p>lvl {level}</p>
        <span>ProfileImg</span>
      </div>
    </>
  );
}

function Dashboard({ level, nextLevelXPNeeded, currentLevelXPNeeded, XP }) {
  return (
    <>
      <LevelOverview
        level={level}
        nextLevelXPNeeded={nextLevelXPNeeded}
        currentLevelXPNeeded={currentLevelXPNeeded}
        XP={XP}
      />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </>
  );
}

function LevelOverview({ level, nextLevelXPNeeded, currentLevelXPNeeded, XP }) {
  return (
    <div>
      <p>Level {level}</p>
      <p>0 quests cleared . 0 achievements . {XP} XP earned</p>
      <p>
        lvl {level} - {level + 1}
      </p>
      <label for="progress">
        {XP} / {nextLevelXPNeeded} XP
      </label>
      <progress id="progress" value={XP} max={currentLevelXPNeeded}>
        32%
      </progress>
    </div>
  );
}

function OverviewCard() {
  return (
    <div>
      <h2>0</h2>
      <p>description</p>
      <p>had done</p>
    </div>
  );
}

function QuestsBoard({
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
  quests,
  onAddQuest,
  showAddQuest,
}) {
  return (
    <>
      <div>
        <h1>Quests Board</h1>
        <p>Create and complete your Quests to earn XP and level up.</p>
        <button onClick={() => showAddQuest(true)}>+ New Quest</button>
        <QuestCategories
          categories={categories}
          onAddCategory={onAddCategory}
          showAddCategory={showAddCategory}
          setShowAddCategory={setShowAddCategory}
        />
      </div>
      <Quest
        quests={quests}
        showAddQuest={showAddQuest}
        onAddQuest={onAddQuest}
        categories={categories}
      />
    </>
  );
}

function Quest({ quests, showAddQuest, onAddQuest, categories }) {
  return (
    <div>
      {quests.map((quest, index) => (
        <div key={index}>
          <h2>{quest.title}</h2>
          <p>{quest.description}</p>
          {quest.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
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
      />
    </div>
  );
}

function AddQuest({ showAddQuest, onAddQuest, categories }) {
  if (showAddQuest === false) {
    return null;
  }

  const [defaultXPValue, setDefaultXPValue] = useState(0);

  const defaultXP = {
    easy: 50,
    medium: 100,
    hard: 175,
    epic: 300,
    legendary: 500,
  };

  return (
    <div>
      <h1>New Quest</h1>
      <button onClick={onAddQuest}>X</button>

      <input id="title" placeholder="e.g. Run 5km before work" />
      <label htmlFor="title">QUEST TITLE</label>

      <input
        id="description"
        placeholder="Give a description about the Quest ... "
      />
      <label htmlFor="description">DESCRIPTION (OPTIONAL)</label>

      <select id="category">
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="category">CATEGORY</label>

      <select id="difficulty">
        {Object.entries(defaultXP).map(([difficulty, xp]) => (
          <option
            key={difficulty}
            value={difficulty}
            onChange={(e) => setDefaultXPValue(e.target.value)}
          >
            {difficulty} ({xp} XP)
          </option>
        ))}
      </select>
      <label htmlFor="difficulty">DEFAULT XP</label>

      <input placeholder={defaultXPValue} id="difficulty" />
      <label htmlFor="difficulty">
        XP REWARD (SUGGESTED: {defaultXPValue})
      </label>

      <button onClick={() => onAddQuest}></button>
    </div>
  );
}

function QuestCategories({
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

function Category({
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
}) {
  return (
    <div>
      {categories.map((category, index) => (
        <button key={index}>{category}</button>
      ))}
      <button onClick={() => setShowAddCategory(true)}>+ New Category</button>
      <AddCategory
        onAddCategory={onAddCategory}
        showAddCategory={showAddCategory}
        setShowAddCategory={setShowAddCategory}
      />
    </div>
  );
}

function AddCategory({ onAddCategory, showAddCategory, setShowAddCategory }) {
  if (showAddCategory === false) {
    return null;
  }

  return (
    <div>
      <input type="text" placeholder="Category Name" />
      <button
        onClick={() => onAddCategory(document.querySelector("input").value)}
      >
        Add Category
      </button>
      <button onClick={() => setShowAddCategory(false)}>Cancel</button>
    </div>
  );
}

// function Achievements() {
//     return ()
// }
