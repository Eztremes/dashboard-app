import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget, addCategory } from "../store/widgetsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddWidgetForm({ onClose }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  const [categoryId, setCategoryId] = useState(categories[0]?.id || "");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Widget name required");
      return;
    }
    if (!categoryId && !newCategoryName.trim()) {
      alert("Choose or create a category");
      return;
    }
    let targetCategoryId = categoryId;
    if (!targetCategoryId && newCategoryName.trim()) {
      targetCategoryId = nanoid();
      dispatch(addCategory({ id: targetCategoryId, name: newCategoryName.trim() }));
    }
    dispatch(addWidget(targetCategoryId, name.trim(), text.trim() || "Random text"));
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add Widget</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Widget Name
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Widget Text
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </label>

          <label>
            Choose Category
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              <option value="">-- create new category --</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </label>

          <label>
            Or create new category
            <input
              placeholder="New category name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
          </label>

          <div className="modal-actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn">Add Widget</button>
          </div>
        </form>
      </div>
    </div>
  );
}
