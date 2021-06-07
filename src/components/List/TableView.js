import React, { useState, useContext } from "react";
import { Box, DataTable, Text, Anchor } from "grommet";
import { Star, View } from "grommet-icons";
import { Link } from "react-router-dom";
import { FavContext } from "../../contexts/favouritesProvider";

const TableView = ({ data, search }, props) => {
  const {
    isFaved,
    setIsFaved,
    favId,
    setFavId,
    DeleteFavourite,
    CreateFavourite,
  } = useContext(FavContext);
  const [selectedRow, setSelectedRow] = useState([]);
  const columns = [
    {
      property: "is_faved",
      render: (datum) =>
        datum.is_faved === true ? (
          <Star onClick={() => DeleteFavourite(datum.fav[0].id)} />
        ) : (
          <Star color="surface" onClick={() => CreateFavourite(datum.id)} />
        ),
    },
    { property: "org_name", header: "Organization" },
    {
      property: "level",
      header: "Level",
    },
    {
      property: "name",
      header: "Name",
    },
    {
      property: "year",
      header: "Year",
    },
    {
      property: "current",
      header: "Current",
      render: (datum) =>
        datum.current === true ? (
          <Text color="status-ok">Yes</Text>
        ) : (
          <Text color="status-warning">No</Text>
        ),
    },
    {
      property: "Go to Test",
      render: (datum) => (
        <Anchor as={Link} to={`/tests/${datum.id}`}>
          <Box flex align="center">
            <View />
            <Text>View</Text>
          </Box>
        </Anchor>
      ),
    },
  ];

  const resultColumns = [
    { property: "item.org_name", header: "Organization" },
    {
      property: "item.level",
      header: "Level",
    },
    {
      property: "item.name",
      header: "Name",
    },
    {
      property: "item.year",
      header: "Year",
    },
    {
      property: "item.current",
      header: "Current",
      render: (datum) =>
        true ? (
          <Text color="status-ok">Yes</Text>
        ) : (
          <Text color="status-warning">No</Text>
        ),
    },
    {
      property: "Go to Test",
      render: (datum) => "go to test",
    },
  ];
  console.log(props);

  const selectHandler = (row) => {
    setSelectedRow(row);
  };

  let styleSelectedRows = selectedRow.reduce(function (allRows, row) {
    allRows[row] = { background: "hoverBackground" };
    return allRows;
  }, {});

  console.log(styleSelectedRows);

  return (
    <div className="container-fluid">
      <Box background="surface" animation="fadeIn">
        <DataTable
          className="test-table"
          background={{ select: "light-1" }}
          columns={search ? resultColumns : columns}
          data={data}
          sortable
          pad="small"
          select={selectedRow}
          onClickRow={(event) => console.log(event.datum)}
          onSelect={(row) => selectHandler(row)}
          rowProps={styleSelectedRows}
          primaryKey="id"
        />
      </Box>
    </div>
  );
};

export default TableView;
