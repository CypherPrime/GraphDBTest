import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';

interface RowData {
  id: number;
  isChecked: boolean;
  fileName: string;
  graphID: string;
  fileSize: string;
}

const rows: RowData[] = [
  { id: 1, isChecked: true, fileName: 'address-triples-data3.ttl', graphID: '123', fileSize: '5MB' },
  { id: 2, isChecked: false, fileName: 'address-triples-data3.ttl', graphID: '124', fileSize: '3MB' },
  { id: 3, isChecked: false, fileName: 'address-triples-data3.ttl', graphID: '125', fileSize: '8MB' },
];

const DataTable: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns: GridColDef[] = [
    {
      field: 'isChecked',
      headerName: 'Import',
      flex: 1,
      renderHeader: () => (
        <Button variant="contained" size="small">
          Import
        </Button>
      ),
      renderCell: (params) => <Checkbox checked={params.row.isChecked} />,
    },
    { field: 'fileName', headerName: 'File', flex: 1 },
    {
      field: 'graphID',
      headerName: 'Named Graph ID',
      flex: 1,
      renderCell: () => (
        <Grid container alignItems="center">
          <Grid item>Graph</Grid>
          <Grid item>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <KeyboardArrowDownIcon sx={{ color: '#737B7D' }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      ),
    },
    { field: 'fileSize', headerName: 'File Size', flex: 1 },
    {
      field: 'deleteOption',
      headerName: 'Delete',
      flex: 1,
      renderCell: () => (
        <IconButton style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#C3CBCD' }}>
          <ClearIcon sx={{ color: '#737B7D' }} />
        </IconButton>
      ),
    },
    {
      field: 'importOption',
      headerName: 'Import',
      flex: 1,
      renderCell: () => (
        <IconButton style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#C3CBCD' }}>
          <ImportExportIcon sx={{ color: '#737B7D' }} />
        </IconButton>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pagination={false}
        hideFooter={true}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'white',
            borderBottom: 'none',
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold',
            },
          },
          '& .MuiDataGrid-cell': {
            backgroundColor: 'white',
            borderBottom: 'none',
          },
          '& .MuiDataGrid-row': {
            borderBottom: 'none',
          },
          '& .MuiCheckbox-root': {
            color: '#007EFF',
          },
        }}
        disableColumnMenu
        // hideSortIcons
      />
    </div>
  );
};

export default DataTable;
