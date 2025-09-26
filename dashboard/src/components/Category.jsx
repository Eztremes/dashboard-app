import React from "react";
import Widget from "./Widget";

export default function Category({ category, searchQuery }) {
  const matchesSearch = (widget) => {
    if (!searchQuery || searchQuery.trim() === "") return true;
    const q = searchQuery.toLowerCase();
    return (
      widget.name.toLowerCase().includes(q) ||
      widget.text.toLowerCase().includes(q)
    );
  };

  const visibleWidgets = category.widgets.filter(matchesSearch);

  return (
    <section className="category">
      <div className="category-header">
        <h2>{category.name}</h2>
        <div className="meta">{category.widgets.length} widgets</div>
      </div>
      <div className="widgets-grid">
        {visibleWidgets.length > 0 ? (
          visibleWidgets.map((w) => (
            <Widget key={w.id} widget={w} categoryId={category.id} />
          ))
        ) : (
          <div className="empty">No widgets match the search.</div>
        )}
      </div>
    </section>
  );
}
