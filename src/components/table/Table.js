import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import google from "../../assets/google.png";
import invision from "../../assets/invision.png";
import microsoft from "../../assets/microsoft.png";
import paypal from "../../assets/paypal.png";
import wix from "../../assets/wix.png";
import twitter from "../../assets/twitter.png";

function createData(
  id,
  name,
  image,
  description,
  members,
  categories,
  tags,
  meeting
) {
  return {
    id,
    name,
    image,
    description,
    members,
    categories,
    tags,
    meeting,
  };
}

const rows = [
  createData(
    1,
    "Wix",
    wix,
    "Wix is a cloud-based...",
    [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      { name: "Designer", color: "#E8751A" },
      { name: "marketing", color: "#3366FF" },
    ],
    ["#development", "#trending"],
    [{ name: "in 30 minutes", color: "#FFD700" }]
  ),
  createData(
    2,
    "twitter",
    twitter,
    "Twitter is a Canadian...",
    [
      "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      "https://images.unsplash.com/photo-1705779235006-4111cb1a889e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      { name: "Designer", color: "#FFD700" },
      { name: "marketing", color: "#CCCCCC" },
      { name: "marketing", color: "#AD88C6" },
    ],
    ["#development", "#marketing"],
    [{ name: "Tomorrow", color: "#DC84F3" }]
  ),
  createData(
    3,
    "Paypal",
    paypal,
    "PayPal Holdings, Inc. ...",
    [
      "https://images.unsplash.com/photo-1607699032287-f58742a2693d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      { name: "Designer", color: "#FF5733" },
      { name: "marketing", color: "rgba(213, 113, 91, 1)" },
    ],
    ["#development", "#trending", "#marketing"],
    [{ name: "Tomorrow", color: "#FF9BD2" }]
  ),
  createData(
    4,
    "Google",
    google,
    "Google LLC is an ...",
    [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [{ name: "marketing", color: "#99BC85" }],
    ["#development", "#trending"],
    [{ name: "in 6 hours", color: "#86A7FC" }]
  ),
  createData(
    5,
    "Microsoft",
    microsoft,
    "Microsoft Corporation ...",
    [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      { name: "Designer", color: "#FFA07A" },
      { name: "marketing", color: "#FFD700" },
      { name: "marketing", color: "#CCCCCC" },
    ],
    ["#development", "#marketing"],
    [{ name: "Cancelled", color: "#CCCCCC" }]
  ),
  createData(
    6,
    "Invision",
    invision,
    "InVisionApp, Inc. is ...",
    [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      { name: "Designer", color: "#00CED1" },
      { name: "marketing", color: "#7B68EE" },
    ],
    ["#development", "#trending"],
    [{ name: "Tomorrow", color: "#6DA4AA" }]
  ),
];

const headCells = [
  { id: "name", numeric: false, disablePadding: false, label: "Brand" },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  { id: "members", numeric: false, disablePadding: false, label: "Members" },
  {
    id: "categories",
    numeric: false,
    disablePadding: false,
    label: "Categories",
  },
  { id: "tags", numeric: false, disablePadding: false, label: "Tags" },
  {
    id: "Next meeting",
    numeric: false,
    disablePadding: false,
    label: "Next meeting",
  },
  { id: "+", numeric: false, disablePadding: false, label: "+" },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="default"
            size="small"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            style={{ color: "#888", fontWeight: "bold" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ marginBottom: 0 }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="default"
                        size="small"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={row.image}
                          alt={row.name}
                          style={{
                            width: 18,
                            height: 18,
                            marginRight: 10,
                            borderRadius: 5,
                          }}
                        />
                        {row.name}
                      </Box>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        maxWidth: "200px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row.description}
                    </TableCell>
                    <TableCell align="left">
                      <Box sx={{ display: "flex" }}>
                        {row.members.map((member, index) => (
                          <img
                            key={index}
                            src={member}
                            alt={`Member ${index + 1}`}
                            style={{
                              width: 20,
                              height: 20,
                              marginRight: 5,
                              objectFit: "cover",
                              borderRadius: 20,
                              marginLeft: index !== 0 ? -10 : 0,
                              position: index !== 0 ? "relative" : "static",
                              border: "1px solid gray",
                            }}
                          />
                        ))}
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      {row.categories.map((category, index) => (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: category.color,
                            borderRadius: "4px",
                            padding: "2px 8px",
                            marginRight: "5px",
                            display: "inline-block",
                          }}
                        >
                          {category.name}
                        </Box>
                      ))}
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{
                        maxWidth: "150px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row.tags.join(", ")}
                    </TableCell>
                    <TableCell align="left">
                      {row.meeting.map((category, index) => (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: category.color,
                            borderRadius: "4px",
                            padding: "2px 8px",
                            marginRight: "5px",
                            display: "inline-block",
                          }}
                        >
                          {category.name}
                        </Box>
                      ))}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
