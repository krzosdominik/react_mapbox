import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const TablePagination = ({ onClick, currentPage, pagesCount }) => {

    const onPaginationClick = (e, index) => {
        e.preventDefault();
        onClick(index);
    }

    return (
        <div className="pagination-wrapper">
            <Pagination
                className="pagination justify-content-center"
                aria-label="Table pagination"
            >
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        onClick={e => onPaginationClick(e, currentPage - 1)}
                        previous
                        href="#"
                    />
                </PaginationItem>
                {[...Array(pagesCount)].map((page, i) =>
                    <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink onClick={e => onPaginationClick(e, i)} href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        onClick={e => onPaginationClick(e, currentPage + 1)}
                        next
                        href="#"
                    />
                </PaginationItem>
            </Pagination>
        </div>
    );
}

export default TablePagination;
