import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidgetInCategory } from "../store/widgetsSlice";

/*
 This modal shows all categories and lists all widgets across categories in a simple way.
 You can uncheck a widget from a category to remove it (as per assignment requirement).
*/

export default function ManageCategoriesModal({ onClose }) {
  const categories = useSelector((s) => s.dashboard.categories);
  const dispatch = useDispatch();

  // build a master list of widgets to display for toggling membership
  const masterWidgetsMap = {};
  categories.forEach((c) => {
    c.widgets.forEach((w) => {
      masterWidgetsMap[w.id] = w; // last one wins but widgets are identical if same id
    });
  });
  // Convert to array
  const masterWidgets = Object.values(masterWidgetsMap);

  const isWidgetInCategory = (category, widgetId) =>
    category.widgets.some((w) => w.id === widgetId);

  const handleToggle = (categoryId, widget) => {
    dispatch(toggleWidgetInCategory({ categoryId, widget }));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal wide">
        <h2>Manage Categories</h2>
        <p>Uncheck a widget under a category to remove it from that category.</p>

        <div className="manage-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="manage-card">
              <h3>{cat.name}</h3>
              {masterWidgets.length === 0 ? (
                <div className="empty">No widgets available.</div>
              ) : (
                <ul className="checkbox-list">
                  {masterWidgets.map((w) => (
                    <li key={w.id}>
                      <label>
                        <input
                          type="checkbox"
                          checked={isWidgetInCategory(cat, w.id)}
                          onChange={() => handleToggle(cat.id, w)}
                        />
                        {w.name}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="btn ghost" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
