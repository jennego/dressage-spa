import React from "react";
import { Grommet, Box, DataTable, CheckBox } from "grommet";

const TableView = (props) => {
  const columns = [
    {
      property: "checkbox",
      render: (datum) => (
        <CheckBox
        // key={datum.name}
        // checked={checked.indexOf(datum.name) !== -1}
        // onChange={e => onCheck(e, datum.name)}
        />
      ),
    },
    { property: "id", primary: true },
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
      render: (datum) => (true ? "Yes" : "No"),
    },
    {
      property: "Go to Test",
      render: (datum) => "go to test",
    },
  ];
  console.log(props);
  return (
    <div className="container-fluid">
      <h1>Table View</h1>
      <DataTable
        columns={columns}
        data={props.tests.dressage_tests}
        sortable
        background={{
          header: "brand",
          body: ["background", "surface"],
        }}
        pad="small"
        onClickRow={(event) => console.log(event.datum)}
      />
    </div>
  );
};

export default TableView;
