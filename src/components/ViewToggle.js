import { Layout, List } from "lucide-react";
import React from "react";

const ViewToggle = ({ isListView, toggleView }) => {
  return (
    <div className="flex gap-2 p-4 bg-white rounded-lg shadow-sm">
      <button
        onClick={() => {
          toggleView(false);
        }}
        className={`p-2 rounded flex items-center gap-2 ${
          !isListView ? "bg-green-100 text-green-600" : "bg-gray-100"
        }`}
      >
        <Layout size={18} />
        Grid
      </button>
      <button
        onClick={() => {
          toggleView(true);
        }}
        className={`p-2 rounded flex items-center gap-2 ${
          isListView ? "bg-green-100 text-green-600" : "bg-gray-100"
        }`}
      >
        <List size={18} />
        List
      </button>
    </div>
  );
};

export default ViewToggle;
