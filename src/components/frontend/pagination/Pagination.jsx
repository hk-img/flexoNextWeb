import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center space-x-2 mt-2 mb-16">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-pointer w-10 h-10 rounded-full flex items-center duration-700 justify-center text-sm font-medium transition-al
            ${
              currentPage === page
                ? "bg-[#f76900] text-white "
                : "bg-[#f9f9f9] text-[#777] hover:text-white hover:bg-[#f76900]"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
