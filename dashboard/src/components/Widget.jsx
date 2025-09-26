import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/widgetsSlice";

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (window.confirm(`Remove widget "${widget.name}"?`)) {
      dispatch(removeWidget({ categoryId, widgetId: widget.id }));
    }
  };

  return (
    <div className="widget-card">
      <button title="Remove" className="remove-btn" onClick={handleRemove}>✕</button>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  );
}
