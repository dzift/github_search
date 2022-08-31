import React from "react";
import { useAppSelector } from "../hooks/redux";

function FavoritePages() {
  const { favorites } = useAppSelector((state) => state.github);
  if (favorites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center p-10 h-screen w-screen mx-auto">
      <ul className="list-none">
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritePages;
