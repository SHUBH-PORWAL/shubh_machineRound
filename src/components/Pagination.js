import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/postsSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  const { totalPages, currentPage } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
    }
  };
  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => {
            handlePageChange(page);
          }}
          className={`px-3 py-1 rounded ${
            currentPage === page
              ? "bg-green-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
