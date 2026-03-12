import {
  ButtonPagination,
  ContainerPagination,
  Ellipsis,
  Info,
} from "./Pagination.styled";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: IPaginationProps) => {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages: (number | string)[] = [];
    const showLeftEllipsis = currentPage > siblingCount + 2;
    const showRightEllipsis = currentPage < totalPages - siblingCount - 1;

    if (showLeftEllipsis) {
      pages.push(1, "...");
    } else {
      for (let i = 1; i <= Math.min(siblingCount + 1, totalPages); i++) {
        pages.push(i);
      }
    }

    const start = Math.max(2, currentPage - siblingCount);
    const end = Math.min(totalPages - 1, currentPage + siblingCount);

    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    if (showRightEllipsis) {
      if (!pages.includes("...")) pages.push("...");
      if (!pages.includes(totalPages)) pages.push(totalPages);
    } else if (!pages.includes(totalPages)) {
      for (
        let i = Math.max(start, totalPages - siblingCount);
        i <= totalPages;
        i++
      ) {
        if (!pages.includes(i)) pages.push(i);
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <ContainerPagination>
      <ButtonPagination
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ←
      </ButtonPagination>

      {pages.map((page, index) =>
        page === "..." ? (
          <Ellipsis key={`ellipsis-${index}`}>…</Ellipsis>
        ) : (
          <ButtonPagination
            key={page}
            $active={page === currentPage}
            onClick={() => onPageChange(page as number)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </ButtonPagination>
        ),
      )}

      <ButtonPagination
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        →
      </ButtonPagination>

      <Info>
        Страница {currentPage} из {totalPages}
      </Info>
    </ContainerPagination>
  );
};
