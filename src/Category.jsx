import AddCategory from "./AddCategory";

export default function Category({
  categories,
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className={`category-pill${activeCategory === category ? " category-pill--active" : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
      <button
        type="button"
        className="category-pill category-pill--add"
        onClick={() => setShowAddCategory(true)}
      >
        + New Category
      </button>
      <AddCategory
        onAddCategory={onAddCategory}
        showAddCategory={showAddCategory}
        setShowAddCategory={setShowAddCategory}
      />
    </div>
  );
}
