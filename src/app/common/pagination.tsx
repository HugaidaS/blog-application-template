import React from 'react';
export interface Props {
  page: number;
  totalPages:number,
  pageSize:number,
  handlePagination: (page: number) => void;
}
export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  pageSize,
  handlePagination,
}) => {
  
  const pagesCount = Math.ceil(totalPages / pageSize);

  return (
    <div>
      <div className="paginationWrapper">
        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className="pageItem sides"
          >
            &lt;
          </button>
        )}

        {pagesCount>1&&(
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={page===1?"pageItem active":"pageItem"}
        >
          {1}
        </button>
        )}
        {page > 3 && <div className="separator">...</div>}
        {page === pagesCount && pagesCount > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className="pageItem"
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className="pageItem"
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== pagesCount && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className="pageItem active"
          >
            {page}
          </button>
        )}
        {page < pagesCount - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className="pageItem"
          >
            {page + 1}
          </button>
        )}
        {page === 1 && pagesCount > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className="pageItem"
          >
            {page + 2}
          </button>
        )}
        {page < pagesCount - 2 && <div className="separator">...</div>}
        <button
          onClick={() => handlePagination(pagesCount)}
          type="button"
          className={page===pagesCount?"pageItem active":"pageItem"}
        >
          {pagesCount}
        </button>
        {page !== pagesCount && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className="pageItem sides"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
export const Pagination = PaginationComponent;