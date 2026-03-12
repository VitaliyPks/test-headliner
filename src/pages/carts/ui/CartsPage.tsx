import { useNavigate } from "react-router-dom";

import { ErrorState, Loader, Pagination } from "@shared/ui";

import { useCartsListHook } from "../lib";
import { Container } from "./CartsPage.styled";

import { CartList } from "@widgets/cart-list";

export const CartsPage = () => {
  const navigate = useNavigate();

  const {
    cartsData,
    isError,
    isLoading,
    error,
    pagination,
    total,
    setPagination,
  } = useCartsListHook();

  if (isLoading && !cartsData?.list) return <Loader fullScreen />;
  if (isError)
    return (
      <ErrorState
        message={error?.message}
        onRetry={() => window.location.reload()}
      />
    );

  return (
    <Container>
      <h1>User Carts</h1>
      {isLoading && <Loader />}
      <CartList
        carts={cartsData.list || []}
        onCartClick={(id) => navigate(`/carts/${id}`)}
      />

      {pagination && total && cartsData?.list && (
        <Pagination
          currentPage={pagination.page}
          totalPages={Math.ceil(total / pagination.limit)}
          onPageChange={(page) => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setPagination({ page });
          }}
        />
      )}
    </Container>
  );
};
