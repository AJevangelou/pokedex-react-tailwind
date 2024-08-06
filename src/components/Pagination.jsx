import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="mt-4">
      {gotoPrevPage && (
        <button onClick={gotoPrevPage} className="mr-2 w-40">
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button onClick={gotoNextPage} className="w-40">
          Next
        </button>
      )}
    </div>
  );
}
