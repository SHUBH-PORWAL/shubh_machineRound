import React, { useEffect, useState } from "react";
const FeedbackForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (!isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventdefault();
    setFormData({ name: "", email: "", feedback: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold "> We-re listening! </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            x
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="blocl text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="blocl text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="blocl text-sm font-medium mb-1">Feedback</label>
            <textarea
              type="text"
              value={formData.feedback}
              onChange={(e) => {
                setFormData({ ...formData, feedback: e.target.value });
              }}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover-bg-green-600 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
