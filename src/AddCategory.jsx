export default function AddCategory({
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
}) {
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
