import React from 'react';
import { MaterialReactTable } from 'material-react-table';

import { Box, Button } from '@mui/material';
import { exportToExcel } from '../utils/exportToExcel';

export const DataTable = ({ data, columnas, name }) => {


  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    exportToExcel(rowData, name);
  };

  return (
    <MaterialReactTable
      columns={columnas}
      data={data}
      enableRowSelection
      enableColumnOrdering
      enablePagination
      enableGlobalFilter
      enableColumnFilters
      enableStickyHeader
      muiTableContainerProps={{ sx: {
        width: '100%',
        padding: '1rem', // Forzar padding interno
        boxSizing: 'border-box',
      }, }}
      renderTopToolbarCustomActions={({ table }) => (
        <Box>
          <Button
            onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
            variant="contained"
            color="success"
          >
            Exportar Excel
          </Button>
        </Box>
      )}
    />
  );
};
