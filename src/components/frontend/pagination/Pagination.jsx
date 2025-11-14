import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageWindow = 5; 

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - Math.floor(pageWindow / 2));
    let end = start + pageWindow - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - pageWindow + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-2 mb-16">
      <button
        className="cursor-pointer px-3 py-2 bg-[#f9f9f9] text-[#777] rounded hover:bg-[#f76900] hover:text-white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="w-10 h-10 rounded-full bg-[#f9f9f9] text-[#777] hover:bg-[#f76900] hover:text-white"
          >
            1
          </button>
          <span className="text-[#777]">...</span>
        </>
      )}
      {pages?.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center 
            ${
              currentPage === page
                ? "bg-[#f76900] text-white"
                : "bg-[#f9f9f9] text-[#777] hover:bg-[#f76900] hover:text-white"
            }`}
        >
          {page}
        </button>
      ))}

      {pages[pages?.length - 1] < totalPages && (
        <>
          <span className="text-[#777]">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-10 h-10 rounded-full bg-[#f9f9f9] text-[#777] hover:bg-[#f76900] hover:text-white"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className="cursor-pointer px-3 py-2 bg-[#f9f9f9] text-[#777] rounded hover:bg-[#f76900] hover:text-white"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
