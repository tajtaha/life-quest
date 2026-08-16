import { useState } from "react";

export default function AddCategory({
  onAddCategory,
  showAddCategory,
  setShowAddCategory,
}) {
  const [categoryName, setCategoryName] = useState("");

  if (showAddCategory === false) {
    return null;
  }

  function handleSubmit() {
    if (categoryName.trim()) {
      onAddCategory(categoryName.trim());
      setCategoryName("");
      setShowAddCategory(false);
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && setShowAddCategory(false)}
    >
      <div className="modal" role="dialog" aria-labelledby="new-category-title">
        <div className="modal__header">
          <h2 id="new-category-title" className="modal__title">
            New Category
          </h2>
          <button
            type="button"
            className="modal__close"
            onClick={() => setShowAddCategory(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="modal__body">
          <div className="form-group">
            <label htmlFor="category-name" className="form-label">
              Category Name
            </label>
            <input
              id="category-name"
              type="text"
              className="form-input"
              placeholder="e.g. Health, Work, Learning"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
        </div>

        <div className="modal__footer">
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => setShowAddCategory(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleSubmit}
            disabled={!categoryName.trim()}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
}
