import { Pagination as MuiPagination, PaginationItem } from '@mui/material';

const Pagination = () => {
  return (
    <>
      <MuiPagination
        variant="outlined"
        shape="rounded"
        count={10}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            style={{
              color: 'hsl(210,8%,25%)',
              border: '1px solid var(--black-100)',
            }}
            size="small"
          />
        )}
      />
    </>
  );
};

export default Pagination;
