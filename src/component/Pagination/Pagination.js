import PropTypes from 'prop-types';

export function Pagination({ page, totalPage, handlePageClick }) {
    return (
        <div className="pagination">
            <button
                onClick={(e) => handlePageClick(e, 1)}
                disabled={page === 1}
            >
                first
            </button>
            <button
                onClick={(e) => handlePageClick(e, page - 1)}
                disabled={page === 1}
            >
                previous
            </button>
            <button
                onClick={(e) => handlePageClick(e, page + 1)}
                disabled={page === totalPage}
            >
                next
            </button>
            <button
                onClick={(e) => handlePageClick(e, totalPage)}
                disabled={page === totalPage}
            >
                last
            </button>
        </div>
    )

}

Pagination.propTypes = {
    page: PropTypes.number,
    totalPage: PropTypes.number,
    handlePageClick: PropTypes.func
}