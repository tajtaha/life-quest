import AddCategory from "./AddCategory";

export default function Category({
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
