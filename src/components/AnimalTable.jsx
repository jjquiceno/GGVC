import React from 'react';
import { MaterialReactTable } from 'material-react-table';

import { Box, Button } from '@mui/material';
import { exportToExcel } from '../utils/exportToExcel';

const AnimalTable = ({ data }) => {
  const columns = [
    { accessorKey: 'id_ganado', header: 'ID' },
    { accessorKey: 'nombre', header: 'Nombre' },
    { accessorKey: 'raza', header: 'Raza' },
    { accessorKey: 'sexo', header: 'Sexo' },
    { accessorKey: 'fecha', header: 'Fecha de nacimiento' },
    { accessorKey: 'potrero', header: 'Potrero' },
    { accessorKey: 'estado', header: 'Estado' },
  ];


  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    exportToExcel(rowData, 'animales');
  };

  return (
    <MaterialReactTable
      columns={columns}
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

export default AnimalTable;
