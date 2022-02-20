import { PaginationNumber, PaginationStyled } from './PaginationStyled';
import { TextRegular } from '../../style/components/Text';

function Pagination({ items, itemsPerPage, changePage, currentPage }) {
  const numOfPages = Math.ceil(items / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationStyled>
      <TextRegular onClick={() => changePage(currentPage - 1, numOfPages)}>
        Prev
      </TextRegular>
      <ul>
        {pageNumbers.map((num) => (
          <PaginationNumber
            key={num}
            onClick={() => changePage(num, numOfPages)}
            active={num === currentPage}
          >
            <li>{num}</li>
          </PaginationNumber>
        ))}
      </ul>
      <TextRegular onClick={() => changePage(currentPage + 1, numOfPages)}>
        Next
      </TextRegular>
    </PaginationStyled>
  );
}

export default Pagination;
