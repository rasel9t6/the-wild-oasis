import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          {
            value: 'all',
            label: 'All',
          },
          {
            value: 'no-discount',
            label: 'No discount',
          },
          {
            value: 'with-discount',
            label: 'With discount',
          },
        ]}
      />
      <SortBy
        options={[
          {
            value: 'name-asc',
            label: 'Sort by (A-Z)',
          },
          {
            value: 'name-desc',
            label: 'Sort by (Z-A)',
          },
          {
            value: 'price-asc',
            label: 'Sort by (Lower Price)',
          },
          {
            value: 'price-desc',
            label: 'Sort by (Higher Price)',
          },
          {
            value: 'maxCapacity-asc',
            label: 'Sort by (Lower Capacity)',
          },
          {
            value: 'maxCapacity-desc',
            label: 'Sort by (Higher Capacity)',
          },
        ]}
      />
    </TableOperations>
  );
};
export default CabinTableOperations;
