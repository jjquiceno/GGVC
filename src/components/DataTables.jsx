import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Button } from '@mui/material';
import { exportToExcel } from '../utils/exportToExcel';

export const DataTable = ({ data, columnas, name, onDeleteRows }) => {
  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    exportToExcel(rowData, name);
  };

  const handleDeleteRows = (rows, table) => {
    const rowData = rows.map((row) => row.original);
    if (window.confirm(`¿Seguro que quieres eliminar ${rowData.length} registro(s)?`)) {
      onDeleteRows(rowData); // 👈 Función que pasas desde el padre para eliminar en tu API
      table.resetRowSelection(); // Limpia la selección después de eliminar
    }
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
      muiTableContainerProps={{
        sx: {
          width: '100%',
          padding: '1rem',
          boxSizing: 'border-box',
        },
      }}
      localization={{
        clearSelection: 'Limpiar selección', // Solo por si aún quieres que cambie texto
      }}
      renderTopToolbarCustomActions={({ table }) => {
        const selectedRows = table.getSelectedRowModel().rows;
        return (
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <Button
              onClick={() =>
                handleExportRows(table.getPrePaginationRowModel().rows)
              }
              variant="contained"
              color="success"
            >
              Exportar Excel
            </Button>

            {selectedRows.length > 0 && (
              <Button
                onClick={() => handleDeleteRows(selectedRows, table)}
                variant="contained"
                color="error"
              >
                Eliminar dato
              </Button>
            )}
          </Box>
        );
      }}
    />
  );
};
