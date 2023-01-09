import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack
} from "@mui/material";

const tableData = [
  {
    id: 1,
    product_name: "sildenafil citrate",
    supplier: "Wisozk Inc",
    quantity: 261,
    unit_cost: "$10.47",
  },
  {
    id: 2,
    product_name: "Mountain Juniperus ashei",
    supplier: "Keebler-Hilpert",
    quantity: 292,
    unit_cost: "$8.74",
  },
  {
    id: 3,
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
  {
    id: 4,
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
  {
    id: 5,
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
  {
    id: 6,
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
  {
    id: 7,
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
  {
    id: 8,
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
];

export const MuiTable = () => {
  return (
    <Stack spacing={10}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product_name}</TableCell>
                  <TableCell>{row.supplier}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.unit_cost}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ maxHeight:'200px'}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product_name}</TableCell>
                  <TableCell>{row.supplier}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.unit_cost}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
