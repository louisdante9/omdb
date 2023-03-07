import PropTypes from "prop-types";
import { Button } from "../Button";

import "./Pagination.css";

export function Pagination({ page, totalPage, handlePageClick }) {
  return (
    <div className="pagination">
      <Button onClick={(e) => handlePageClick(e, 1)} disabled={page === 1}>
        first
      </Button>
      <Button onClick={(e) => handlePageClick(e, page - 1)} disabled={page === 1}>
        previous
      </Button>
      <Button onClick={(e) => handlePageClick(e, page + 1)} disabled={page === totalPage}>
        next
      </Button>
      <Button onClick={(e) => handlePageClick(e, totalPage)} disabled={page === totalPage}>
        last
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  totalPage: PropTypes.number,
  handlePageClick: PropTypes.func,
};
