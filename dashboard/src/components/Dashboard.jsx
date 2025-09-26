import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

export default function Dashboard({ searchQuery }) {
  const categories = useSelector((state) => state.dashboard.categories);

  return (
    <div className="dashboard">
      {categories.map((cat) => (
        <Category key={cat.id} category={cat} searchQuery={searchQuery} />
      ))}
    </div>
  );
}
